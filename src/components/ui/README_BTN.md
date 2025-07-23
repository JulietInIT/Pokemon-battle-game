
# UI Buttons

This folder contains two reusable button components:

## 🔘 BasicButton

A general-purpose button using DaisyUI variants.

### Usage

```tsx
import Button from '@/components/ui/BasicButton';

<Button label="Primary" variant="primary" />
<Button label="Success" variant="success" />
<Button label="Warning" variant="warning" />
<Button label="Error" variant="error" />
<Button label="Secondary" variant="secondary" />
<Button label="Outline" variant="outline" />
```

### Props – BasicButtons

| Prop       | Type                                | Default   | Description                        |
|------------|-------------------------------------|-----------|------------------------------------|
| `label`    | `string`                            | required  | The text shown on the button       |
| `onClick`  | `() => void`                        | optional  | Click handler                      |
| `type`     | `'button' \| 'submit' \| 'reset'`   | `"button"`| Standard HTML button type          |
| `variant`  | See usage above                     | `"primary"` | DaisyUI button variant             |
| `className`| `string`                            | `""`      | Custom class extension             |

---

## 🔴 PokeballButton

A custom Pokémon-themed button using background images.

### Usage

```tsx
import PokeballButton from '@/components/ui/PokeBallButton';

<PokeballButton label="Catch" variant="catch" />
<PokeballButton label="Release" variant="release" />
<PokeballButton label="Battle" variant="battle" />
<PokeballButton label="Leave" variant="leave" />
```

### Props – PokeballsButtons

| Prop       | Type                                  | Description                       |
|------------|---------------------------------------|-----------------------------------|
| `label`    | `string`                              | Text displayed below the Pokéball |
| `variant`  | `'catch' \| 'release' \| 'battle' \| 'leave'` | Determines the Pokéball image     |
| `onClick`  | `() => void`                          | Click handler                     |
| `className`| `string`                              | Extra classes                     |

### Notes

- Background images must exist in the `/public/` folder.
- Hover effect includes 3D rotation and scale-down animation.
- Text label uses bold styling and black outline for high contrast.
