
## 1 Authentication — Proving who you are

Authentication is the process of verifying the identity of a user, system, or entity.

How it works:
A system checks credentials provided by a user and confirms they are valid.

Common authentication factors:

1. Something you know → password, PIN
2. Something you have → phone, smart card, security token
3. Something you are → fingerprint, face, iris

Examples:

* Logging into email using username and password
* Unlocking a phone with fingerprint
* OTP (one-time password) sent to mobile

Key idea:
Authentication establishes identity, not permissions.

---

## 2 Authorization — Determining what you are allowed to do


Authorization is the process of granting or denying access rights to authenticated users.

How it works:
After identity is confirmed, the system checks access rules or policies to decide what resources the user may use.

Examples:

* Admin can edit and delete files
* Student can view notes but cannot modify them
* Bank customer can see own account but not others’

Types of authorization models:

* Role-Based Access Control (RBAC) → permissions based on role
* Attribute-Based Access Control (ABAC) → permissions based on attributes (department, location, etc.)

Key idea:
Authorization controls permissions and access levels.

---

## 3 Validation — Checking correctness of data

Validation is the process of ensuring input data is correct, complete, and in the proper format.

Where it is used:

* Forms
* Databases
* Software input handling

Examples:

* Email must contain “@”
* Password must be at least 8 characters
* Age must be a number
* Required fields cannot be empty

Key idea:
Validation ensures data integrity and quality, not identity or permissions.

---

## 4 Verification — Confirming truth or accuracy

Verification is the process of confirming that something is true, correct, or matches a known reference.

Purpose:
To answer the question → “Is this genuine or accurate?”

Examples:

* Confirming email address via verification link
* Matching entered password with stored password
* Verifying digital signature
* Checking documents against original records


> Verification confirms authenticity or correctness of information or claims.

---

## 🔑 Relationship Between Authentication and Authorization

1 Authentication → identify the user
2 Authorization → decide permissions
3 Validation → ensure input data is proper
4 Verification → confirm accuracy or authenticity

* Authentication → showing your library card
* Authorization → allowed to borrow books
* Validation → form filled correctly
* Verification → librarian checks card is real
