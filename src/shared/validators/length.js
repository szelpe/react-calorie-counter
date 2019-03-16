export default function (errorMessage, min, max) {
    return value => {
        let error = '';
        let errorMessage = errorMessage || `Field length must be between ${min} and ${max}`;

        if (value == null) {
            return { isValid: true };
        }

        if (value.length < min || value.length > max) {
            error = errorMessage;
        }

        return {
            isValid: error === '',
            error
        };
    }
}
