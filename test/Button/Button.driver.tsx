import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from './Button';
import { BaseComponentDriver } from '../../src/BaseComponentDriver';

export class ButtonDriver extends BaseComponentDriver {
    private props: Partial<ButtonProps> = {
        title: '',
        onClick: () => {},
    };

    constructor() {
        super('Button');
    }

    base = this;

    when = {
        rendered: () => {
            render(<Button {...this.props} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Button {...this.props} />);
        },
    };

    given = {
        props: (props: Partial<ButtonProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
