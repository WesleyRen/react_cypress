import React from 'react';

export function SimpleForm() {
    return (
        <>
            <form onSubmit={(target) => console.log(target.values)}>
                <label>
                    Name:
                    <input type="text"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
}