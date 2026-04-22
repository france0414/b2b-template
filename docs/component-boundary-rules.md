# Component Boundary Rules

## Decision Rule

Every requirement must be reviewed with trade-offs between:

1. Visual flexibility
2. Reusability
3. Coupling risk
4. Delivery speed

No component change should be accepted without this check.

## Independence Rule

- A component must be installable alone.
- A component must be removable alone.
- A component must not require hidden side effects from unrelated modules.

If any of the above fails, split responsibilities before merge.

## Integration Rule

- Use explicit typed interfaces only.
- Integrate through adapters, not direct cross-module assumptions.
- Fixed zone can be consumed by custom zone, but not the opposite.
- Data/reception logic stays outside designer-editable UI components.

## Anti-Coupling Gate (Must Pass)

Before merging:

- [ ] Can fixed components run without custom components?
- [ ] Can one custom component be removed without breaking global layout?
- [ ] Are page data contracts unchanged?
- [ ] Does lint and build pass after isolated removal tests?
