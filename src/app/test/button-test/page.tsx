// src/app/test/button-test/page.tsx
'use client';
import Button from '@/components/ui/BasicButton';
import PokeballButton from '@/components/ui/PokeBallButton';

export default function TestPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Test Buttons</h1>

      <div className="space-x-2">
        <Button label="Primary" variant="primary" />
        <Button label="Success" variant="success" />
        <Button label="Warning" variant="warning" />
        <Button label="Error" variant="error" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Outline" variant="outline" />
      </div>

      <div className="flex space-x-2 mt-6">
        <PokeballButton label="Catch" variant="catch" />
        <PokeballButton label="Release" variant="release" />
        <PokeballButton label="Battle" variant="battle" />
        <PokeballButton label="Leave" variant="leave" />
      </div>
    </div>
  );
}