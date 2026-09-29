# Learning Notes — Password Reset Feature

## 1. Understanding the Existing Code

The existing authentication design uses TypeScript interfaces and service classes.

The `UserService` is responsible for user-related operations, while `AuthService` handles authentication-related functionality.

The password reset feature follows the existing service-oriented structure rather than creating an unrelated implementation.

---

## 2. Understanding TypeScript

This assignment helped me understand how TypeScript can be used to build a structured authentication feature.

Important concepts used include:

- Interfaces
- Classes
- Private methods
- Optional properties
- Type annotations
- Promises
- `async` and `await`
- Error handling

---

## 3. Secure Token Generation

A password reset token should be unpredictable.

The implementation uses:

```typescript
randomBytes(32).toString("hex")
```

from Node.js `crypto`.

This generates a cryptographically secure random token.

---

## 4. Token Hashing

The raw reset token should not be stored directly.

The implementation hashes the token before storing it.

The user receives the raw token, while the application stores only the hashed representation.

This reduces the risk of exposing usable reset tokens if stored data is accessed.

---

## 5. Token Expiration

The reset token is configured with an expiry time of exactly one hour.

The expiry is calculated using:

```typescript
Date.now() + 60 * 60 * 1000
```

The application checks the expiry before allowing the password to be changed.

---

## 6. One-Time Token Usage

A reset token must only be usable once.

The implementation maintains a `resetTokenUsed` property.

After a successful password reset, the token is marked as used.

If the same token is submitted again, the request is rejected.

---

## 7. Password Security

The new password is never stored as plaintext.

The implementation uses bcrypt to create a password hash:

```typescript
await bcrypt.hash(newPassword, 10)
```

This follows the password hashing approach required by the assignment.

---

## 8. Handling Invalid and Expired Tokens

The implementation handles different failure cases separately:

### Invalid Token

An incorrect token is rejected.

```text
Invalid reset token
```

### Expired Token

A token whose expiry time has passed is rejected.

```text
Reset token has expired
```

### Reused Token

A token that has already been used is rejected.

```text
Reset token has already been used
```

---

## 9. Secure Handling of Non-Existent Users

The implementation does not generate a reset token for an email address that does not belong to a user.

The test result was:

```text
Secure failure: no account information revealed
```

This avoids unnecessarily revealing whether an account exists.

---

## 10. Testing and Validation

Six required test scenarios were executed:

1. Valid email requests a password reset.
2. Valid reset token updates the password.
3. Reused token is rejected.
4. Invalid token is rejected.
5. Non-existent user is handled securely.
6. Expired token is rejected.

All six tests passed successfully.

---

## 11. What I Learned from AI-Assisted Development

This assignment demonstrated that AI-generated code should not simply be copied and considered correct.

The workflow used in this assignment was:

1. Understand the existing requirements.
2. Write a detailed prompt.
3. Generate an implementation.
4. Compile the implementation.
5. Review the security behavior.
6. Identify problems in the generated implementation.
7. Correct the implementation.
8. Run the required test cases.
9. Document the validation results.

The testing stage was particularly important because the first implementation did not produce the expected behavior for token reuse and expiration.

After reviewing the behavior, the implementation was corrected and tested again.

---

## 12. Key Takeaway

The main lesson from this assignment is that AI can assist with implementation, but the developer is responsible for understanding, validating, testing, and correcting the generated code.

For security-sensitive functionality such as password reset, careful validation is necessary to ensure that token generation, token storage, expiration, one-time usage, and password handling work as intended.