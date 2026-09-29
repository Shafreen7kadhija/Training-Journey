import * as bcrypt from "bcrypt";
import { randomBytes } from "crypto";
// ============================================================
// PASSWORD RESET SERVICE
// ============================================================
class PasswordResetService {
    users = [];
    // --------------------------------------------------------
    // Add user
    // --------------------------------------------------------
    async addUser(id, email, password) {
        const passwordHash = await bcrypt.hash(password, 10);
        this.users.push({
            id,
            email,
            passwordHash
        });
    }
    // --------------------------------------------------------
    // Find user by email
    // --------------------------------------------------------
    findUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }
    // --------------------------------------------------------
    // Request password reset
    // --------------------------------------------------------
    async requestPasswordReset(email) {
        const user = this.findUserByEmail(email);
        // Do not reveal whether the account exists.
        if (!user) {
            return null;
        }
        // Generate cryptographically secure token.
        const token = randomBytes(32).toString("hex");
        // Hash token before storing it.
        const tokenHash = await bcrypt.hash(token, 10);
        // Exactly one hour from now.
        const expiry = Date.now() + 60 * 60 * 1000;
        user.resetTokenHash = tokenHash;
        user.resetTokenExpiry = expiry;
        user.resetTokenUsed = false;
        // In a real application this raw token
        // would be sent through email.
        return token;
    }
    // --------------------------------------------------------
    // Reset password
    // --------------------------------------------------------
    async resetPassword(email, token, newPassword) {
        const user = this.findUserByEmail(email);
        // Secure failure for unknown user.
        if (!user) {
            throw new Error("Invalid reset request");
        }
        // Check whether a reset token exists.
        if (!user.resetTokenHash) {
            throw new Error("Invalid reset token");
        }
        // Check whether token was already used.
        if (user.resetTokenUsed === true) {
            throw new Error("Reset token has already been used");
        }
        // Check whether token has expired.
        if (user.resetTokenExpiry === undefined ||
            Date.now() > user.resetTokenExpiry) {
            throw new Error("Reset token has expired");
        }
        // Compare supplied token with stored hash.
        const tokenMatches = await bcrypt.compare(token, user.resetTokenHash);
        if (!tokenMatches) {
            throw new Error("Invalid reset token");
        }
        // Hash the new password using bcrypt.
        const newPasswordHash = await bcrypt.hash(newPassword, 10);
        // Update password.
        user.passwordHash =
            newPasswordHash;
        // Mark token as permanently used.
        user.resetTokenUsed = true;
        return "Password updated successfully";
    }
    // --------------------------------------------------------
    // Testing helper
    // --------------------------------------------------------
    async expireResetToken(email) {
        const user = this.findUserByEmail(email);
        if (user) {
            user.resetTokenExpiry =
                Date.now() - 1000;
        }
    }
}
// ============================================================
// TEST PROGRAM
// ============================================================
async function main() {
    const authService = new PasswordResetService();
    // --------------------------------------------------------
    // Create test user
    // --------------------------------------------------------
    await authService.addUser(1, "john@example.com", "OldPassword123");
    // ========================================================
    // TEST 1: VALID EMAIL
    // ========================================================
    console.log("\n===== TEST 1: VALID EMAIL =====");
    const validToken = await authService.requestPasswordReset("john@example.com");
    if (validToken) {
        console.log("Reset request successful");
    }
    else {
        console.log("Reset request failed");
    }
    // ========================================================
    // TEST 2: VALID TOKEN
    // ========================================================
    console.log("\n===== TEST 2: VALID TOKEN =====");
    if (validToken) {
        try {
            const result = await authService.resetPassword("john@example.com", validToken, "NewPassword123");
            console.log(result);
        }
        catch (error) {
            console.log(error instanceof Error
                ? error.message
                : "Password reset failed");
        }
    }
    // ========================================================
    // TEST 3: REUSE TOKEN
    // ========================================================
    console.log("\n===== TEST 3: REUSE TOKEN =====");
    if (validToken) {
        try {
            await authService.resetPassword("john@example.com", validToken, "AnotherPassword123");
            console.log("ERROR: Reused token was accepted");
        }
        catch (error) {
            console.log(error instanceof Error
                ? error.message
                : "Reuse token rejected");
        }
    }
    // ========================================================
    // TEST 4: INVALID TOKEN
    // ========================================================
    console.log("\n===== TEST 4: INVALID TOKEN =====");
    // Create a fresh reset token first.
    const invalidTestToken = await authService.requestPasswordReset("john@example.com");
    if (invalidTestToken) {
        try {
            await authService.resetPassword("john@example.com", "THIS_IS_NOT_THE_REAL_TOKEN", "Password123");
            console.log("ERROR: Invalid token accepted");
        }
        catch (error) {
            console.log(error instanceof Error
                ? error.message
                : "Invalid token rejected");
        }
    }
    // ========================================================
    // TEST 5: NON-EXISTENT USER
    // ========================================================
    console.log("\n===== TEST 5: NON-EXISTENT USER =====");
    const unknownUserToken = await authService.requestPasswordReset("unknown@example.com");
    if (unknownUserToken === null) {
        console.log("Secure failure: no account information revealed");
    }
    else {
        console.log("ERROR: Account information was revealed");
    }
    // ========================================================
    // TEST 6: EXPIRED TOKEN
    // ========================================================
    console.log("\n===== TEST 6: EXPIRED TOKEN =====");
    const expiredToken = await authService.requestPasswordReset("john@example.com");
    if (expiredToken) {
        // Force this user's reset token to expire.
        await authService.expireResetToken("john@example.com");
        try {
            await authService.resetPassword("john@example.com", expiredToken, "ExpiredPassword123");
            console.log("ERROR: Expired token was accepted");
        }
        catch (error) {
            console.log(error instanceof Error
                ? error.message
                : "Expired token rejected");
        }
    }
}
// ============================================================
// START PROGRAM
// ============================================================
main().catch(error => {
    console.error("Application error:", error instanceof Error
        ? error.message
        : error);
});
