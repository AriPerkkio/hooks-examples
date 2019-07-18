import React from 'react';

import { FormContainer } from 'components/Form';
import { CodeBlockButton } from 'components/CodeBlock';

const FormView = () => (
    <>
        <div className='form-view'>
            <h1>Isolated state management</h1>
            <CodeBlockButton fileName='api/Api.js' text='Api.js' />

            <FormContainer />
        </div>

        <div>
            <CodeBlockButton
                fileName='components/Form/FormContainer.js'
                text='FormContainer.js'
            />
            <CodeBlockButton
                fileName='components/Form/FormPresentational.js'
                text='FormPresentational.js'
            />
        </div>

        <CodeBlockButton
            fileName='components/Form/FormWithHooks.js'
            text='FormWithHooks.js'
        />
        <CodeBlockButton fileName='hooks/useForm.js' text='useForm.js' />
    </>
);

export default FormView;
