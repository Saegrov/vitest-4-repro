import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('that app renders hello world', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Hello, world' })).toBeTruthy();
});
