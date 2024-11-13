

import { test, expect } from '@playwright/test';

test.describe('Assertion methods', () => {         
    test('toBe example', async ({ page }) => {
        let elementValue =5;
        expect(elementValue).toBe(5);

    });

    test('toBeTruthly & toBeFalsy examples', async ({ page }) => {
        let value1 = true;

        expect(value1).toBeTruthy();

        let value2 = false;

        expect(value2).toBeFalsy();
    });

    test('toContain Example', async ({ page }) => {
        let title = 'Hello World';

        expect(title).toContain('World');
    });

    test('toEqual Example', async ({ page }) => {
        let obj1 = {name: 'John', age: 30};
        let obj2 = {name: 'John', age: 30};

        expect(obj1).toEqual(obj2);    // This will pass
        expect(obj1).toBe(obj2); // This will throw an error because obj1 and obj2 are not the same object.
    });

    //TO be is like == in Java (Referecence equality)
    // expect(obj1).toBe(obj2); is like .equals() in Java (Value equality)

});