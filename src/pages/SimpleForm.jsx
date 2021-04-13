import React from 'react';

export function SimpleForm({label, actionText}) {
    return (
        <>
            <form onSubmit={(target) => console.log(target.values)}>
                <label>
                    {label}:
                    <input id='input-text' type="text"/>
                </label>
                <input id='submit-button' type="submit" value={actionText}/>
            </form>
        </>
    );
}