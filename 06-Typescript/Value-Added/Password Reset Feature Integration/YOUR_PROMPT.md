# AI Prompt — Password Reset Feature

I am working on an existing TypeScript authentication system and need to add a secure Password Reset feature.

## Existing Code Structure

The existing project follows these patterns:

- `types/auth.ts` contains the TypeScript interfaces.
- `services/userService.ts` handles user database operations.
- `services/authService.ts` handles authentication.
- `UserService` provides:
  - `findByEmail(email: string): Promise<User | null>`
  - `findById(userId: string): Promise<User | null>`
  - `updateUser(userId: string, updates: Partial<User>): Promise<User>`
- `AuthService` uses dependency injection with `UserService`.
- The application uses `async/await` and `Promise<T>`.
- Passwords are hashed using bcrypt.
- The existing password hashing pattern is:
  `bcrypt.genSalt(10)` followed by `bcrypt.hash(password, salt)`.
- Password comparison uses `bcrypt.compare()`.

## Existing User Interface

The existing `User` interface contains:

- `id: string`
- `email: string`
- `passwordHash: string`
- `createdAt: Date`

The interface contains a TODO for password reset token fields.

## New Requirement

Implement a Password Reset feature with the following workflow:

1. A user requests a password reset by providing their email.
2. The system generates a secure reset token.
3. The system sends a password reset link to the user's email.
4. The user provides the reset token and a new password.
5. The system validates the reset token.
6. The system updates the user's password.
7. The system provides a confirmation response.

## Critical Security Requirements

The implementation MUST satisfy all of the following:

1. The reset token must be generated securely.
2. The reset token must NEVER be stored as plaintext.
3. The reset token must be hashed before being stored.
4. The reset token must expire after exactly 1 hour.
5. Each reset token can only be used once.
6. Invalid tokens must be rejected.
7. Expired tokens must be rejected.
8. A used token must not be accepted again.
9. The new password must be securely hashed using the existing bcrypt pattern.
10. A non-existent user must be handled securely without unnecessarily revealing whether an account exists.

## Technical Requirements

- Use TypeScript.
- Use strict typing.
- Do not use `any`.
- Follow the existing service-based architecture.
- Extend the existing `User` interface rather than replacing it.
- Reuse the existing `UserService`.
- Add the required password-reset functionality to the authentication service where appropriate.
- Follow the existing async/await and `Promise<T>` patterns.
- Use the same bcrypt hashing approach already used by `AuthService`.

## Expected Design

Explain:

1. Which fields should be added to the `User` interface.
2. Where reset-token information should be stored.
3. How the raw reset token should be generated.
4. How the token should be hashed before storage.
5. How token expiration should be represented and checked.
6. How one-time token usage should be enforced.
7. Which methods should be added to the authentication service.
8. How the password should be updated after successful token validation.
9. How invalid, expired, and already-used tokens should be handled.

## Validation Requirements

Before considering the implementation complete, verify that it handles these cases:

- Valid email requesting a reset → success.
- Valid reset token → password successfully updated.
- Reusing the same token → rejected as already used.
- Expired token → rejected as expired.
- Invalid token → rejected as invalid.
- Non-existent user → handled securely.

Provide complete TypeScript code and explain the important security decisions made in the implementation.