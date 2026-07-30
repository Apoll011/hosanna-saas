You are a senior TypeScript library architect.

Design and implement a modern, production-ready RBAC library specifically for Express applications, with optional React helpers. The library must be framework-focused (Express) and not try to support every Node framework.

The goal is to create a lightweight, type-safe authorization library that can be published to npm and used by multiple projects.

## Overall Goals

The library should provide:

* Strong TypeScript support
* Zero dependencies whenever possible
* Excellent developer experience
* Clean APIs
* High performance
* Tree-shakeable modules
* Modular architecture
* Complete documentation
* Comprehensive unit tests
* Production-ready code

The API should feel similar in quality to libraries like Zod, TanStack Query, or React Router.

---

# Authentication

Authentication is NOT handled by this library.

The application will authenticate users and attach a user object to `req.user`.

Example:

```ts
req.user = {
    id: "...",
    workspaceId: "...",
    role: "ADMIN",
    teamId: "..."
}
```

The library only performs authorization.

---

# Roles

Roles are fixed.

```
OWNER
ADMIN
TEAM_LEADER
EDITOR
MUSICIAN
GUEST
```

Users only have ONE role.

The role is stored in the database as a string.

Permissions are NEVER stored in the database.

---

# Permission System

Permissions are string based.

Examples:

```
song.read
song.create
song.edit
song.delete

service.read
service.create
service.edit
service.delete

folder.read
folder.create
folder.delete

user.invite
user.remove

team.manage

billing.manage

settings.manage

export.pdf

import.songs
```

Support wildcard permissions.

Examples:

```
song.*

service.*

*

```

---

# Permission Definition

Provide a builder.

Example:

```ts
const permissions = definePermissions({
    song: [
        "read",
        "create",
        "edit",
        "delete"
    ],

    service: [
        "read",
        "create",
        "edit",
        "delete"
    ],

    billing: [
        "manage"
    ]
});
```

Automatically infer TypeScript types.

Example:

```
type Permission =
    | "song.read"
    | "song.create"
    | ...
```

Invalid strings must produce compile errors.

---

# Role Definition

Allow roles to be defined like:

```ts
defineRoles({

    OWNER: [
        "*"
    ],

    ADMIN: [
        "song.*",
        "service.*",
        "user.invite"
    ],

    MUSICIAN: [
        "song.read",
        "service.read"
    ]

});
```

No inheritance is required.

Keep implementation simple.

---

# Conditions

Support optional conditional authorization.

Examples:

```
Only edit own team

Only edit resources you created

Only edit services belonging to your team

```

Example API:

```ts
can(user)
    .edit(service)
    .when(service.teamId === user.teamId)
```

or another elegant API.

---

# Authorization API

Must support

```ts
can(user, "song.edit")
```

returns boolean.

Also

```ts
cannot(user, "song.edit")
```

---

# Permission Matching

Support

Exact

```
song.edit
```

Wildcard

```
song.*

```

Global wildcard

```
*
```

Efficient implementation.

---

# Express Middleware

This is the main feature.

Provide middleware.

Examples

Require one permission

```ts
router.post(
    "/songs",
    requirePermission("song.create"),
    ...
)
```

Require multiple permissions (ALL)

```ts
requireAllPermissions(
    "song.edit",
    "service.edit"
)
```

Require ANY permission

```ts
requireAnyPermission(
    "song.edit",
    "service.edit"
)
```

Role middleware

```ts
requireRole("ADMIN")
```

Role list

```ts
requireAnyRole(
    "ADMIN",
    "OWNER"
)
```

Allow custom unauthorized responses.

---

# React Support

Create optional React package.

Hooks

```ts
const canEdit = useCan("song.edit");
```

```ts
const isAdmin = useRole("ADMIN");
```

Component

```tsx
<Can permission="song.edit">

<Button />

</Can>
```

Support fallback

```tsx
<Can
    permission="song.edit"
    fallback={<NoPermission />}
/>
```

---

# Type Safety

This is extremely important.

Permission strings should be inferred.

Autocomplete everywhere.

Invalid permission names must fail during compilation.

---

# Custom Checkers

Allow custom authorization.

Example

```ts
registerChecker(

"service.edit",

(user, service) => {

    return service.teamId === user.teamId;

}

);
```

Middleware should automatically support resource-aware checks.

---

# Configuration

Single initialization.

Example

```ts
const auth = createAuthorization({

    permissions,

    roles

});
```

Export helpers from this instance.

---

# Performance

Permission lookups should be O(1) whenever possible.

Avoid repeated parsing.

Cache wildcard expansion.

---

# Error Handling

Provide customizable errors.

Default:

403 Forbidden

Allow custom JSON.

Example

```ts
{
    error: "Missing permission"
}
```

---

# Project Structure

Design a clean folder structure.

Separate

Core

Express

React

Utilities

Types

Tests

Examples

---

# Documentation

Generate documentation including

Installation

Quick Start

Permission Definition

Roles

Middleware

React

Conditions

Custom Checkers

Best Practices

Migration Guide

API Reference

Examples

---

# Testing

Include comprehensive tests covering

Permission matching

Wildcard permissions

Role resolution

Conditions

Middleware

React hooks

Type inference

Edge cases

---

# Code Quality

Use strict TypeScript.

No `any`.

No unnecessary dependencies.

ESM first.

Excellent JSDoc.

Readable architecture.

---

# Overall Design Philosophy

The library should be simple enough that a small project can adopt it in minutes, but powerful enough to support applications like Hosanna, where users have a single role (Owner, Admin, Team Leader, Editor, Musician, Guest), fixed role-to-permission mappings, wildcard permissions, optional resource-based authorization, Express middleware, and React UI helpers. Prioritize developer experience, compile-time type safety, maintainability, and clean APIs over supporting every possible authorization model. Avoid enterprise complexity while leaving room for future extension.

# Here is the rbca system:

## Roles

### 1. Owner (1 per workspace)

The person who created or owns the church workspace.

Permissions:

* Full access
* Manage subscription and billing
* Transfer ownership
* Delete workspace
* Invite/remove users
* Create teams/departments
* Manage all permissions
* View audit log (future)
* Manage API tokens
* Export/import everything

---

### 2. Administrator

Usually worship leaders or pastors.

Permissions:

* Invite/remove members
* Manage teams
* Create/edit/delete songs
* Create/edit/delete services
* Manage folders
* Upload imports
* Export PDFs
* Manage settings (except billing & ownership)
* Approve guest access
* Restore deleted items (future)

Cannot:

* Delete workspace
* Transfer ownership
* Manage billing

---

### 3. Team Leader

Leader of a specific department (Youth, Choir, Sunday Morning, etc.)

Permissions:

* Manage services for their team
* Create/edit songs
* Create folders
* Export PDFs
* Invite guest musicians to their team
* View only their team's services

Optional permission:

* Edit global song library (enabled by admin)

---

### 4. Editor

People helping organize worship.

Permissions:

* Create songs
* Edit songs (if enabled)
* Create services
* Edit services
* Export PDFs

Cannot:

* Invite users
* Delete teams
* Change settings

---

### 5. Musician

Most volunteers.

Permissions:

* View songs
* View assigned services
* Favorite songs
* Download PDFs
* Transpose locally
* Change font size
* Hide/show chords

Optional:

* Suggest song edits (future)

Cannot modify shared data.

---

### 6. Guest

Temporary access.

Permissions:

* View only assigned service
* View assigned songs
* Download PDFs

Automatically expires after a date set by an admin.

---

## Workspace Permissions

Instead of making every permission configurable, I'd use a few important workspace toggles.

### Song Library

* Only Admins can edit
* Team Leaders+
* Everyone except Guests

---

### Delete Songs

* Only Owner
* Admin+
* Editors+

---

### Create Services

* Admin+
* Team Leaders+
* Everyone

---

### Edit Services

* Creator only
* Team Leaders+
* Admin+

---

### Export PDFs

Usually enabled for everyone except Guests.

---

### Invite Guests

* Owner/Admin only
* Team Leaders+
* Everyone

---

## Teams

Since churches often have several ministries:

```
Hosanna Church

├── Main Worship
├── Youth
├── Choir
├── Kids
├── Christmas Event
└── Conference 2027
```

A Team Leader only manages their own team.

The song library can remain global, while services belong to a team.

---

## Billing Roles

Only the Owner should be able to:
* View invoices
* Update payment method
* Cancel subscription

Admins can only see the current plan.
