import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Tests on <AddCategory /> component', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('should display component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should not submit form', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() {},
        });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and then clean text box', () => {
        const value = 'Any text';
        const input = wrapper.find('input');

        input.simulate('change', {
            target: {
                value,
            },
        });

        wrapper.find('form').simulate('submit', {
            preventDefault() {},
        });

        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    });
});
