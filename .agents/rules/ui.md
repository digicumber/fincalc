# UI Rules

## Use shadcn/ui only

- Every UI element must use an existing shadcn/ui component from `@/components/ui`.
- Do not create custom components. Do not hand-roll markup that shadcn already provides (buttons, inputs, dialogs, tables, menus, etc.).
- Compose pages by combining shadcn components; use `className` and variants for styling changes.
- Use the configured aliases and settings from `components.json` (`@/components/ui`, `@/lib/utils`, `radix-nova` style, lucide icons).

## Missing component?

1. Check what is already installed in `src/components/ui`.
2. Search the shadcn/ui registry for a suitable component.
3. Install it with:

```bash
npx shadcn@latest add <component>
```

4. Use the installed component. Never substitute a custom implementation.

## Exceptions

If no shadcn component fits, stop and ask before writing custom UI.
