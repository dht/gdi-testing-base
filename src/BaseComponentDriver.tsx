import { screen, render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

export class BaseComponentDriver {
    constructor(protected name: string) {}

    render(component: JSX.Element) {
        render(component);
        return this;
    }

    element(selector: string) {
        return screen.getByTestId(selector);
    }

    fire(selector: string, event: Event) {
        const instance: HTMLElement | null = this.element(selector);

        if (instance) {
            fireEvent(instance, event);
        }
    }

    snapshot(component: JSX.Element) {
        const instance = renderer.create(component);
        return instance.toJSON();
    }

    get container() {
        return this.element(`${this.name}-container`);
    }
}
