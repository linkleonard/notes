import React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';


const WrappedFormControl = ({ input, meta, ...props }) => {
    const formGroupProps = {};
    if (!(meta.pristine | meta.asyncValidating)) {
        formGroupProps.validationState = meta.invalid ? 'error' : 'success';
    }
    return (
        <FormGroup { ...formGroupProps }>
            <FormControl
                { ...input }
                disabled={ meta.submitting }
            />
        </FormGroup>
    );
}

export default WrappedFormControl;
