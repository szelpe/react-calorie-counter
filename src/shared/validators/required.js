export default function (errorMessage) {
    return value => {
        let error = '';
        let errorMessage = errorMessage || 'Field is required';

        if (value == null || value.length === 0) {
            error = errorMessage;
        }

        return {
            isValid: error === '',
            error
        };
    }
}