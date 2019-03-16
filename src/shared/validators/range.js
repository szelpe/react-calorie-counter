export default function (errorMessage, min, max) {
    return value => {
        let error = '';
        let errorMessage = errorMessage || `Field value must be between ${min} and ${max}`;

        if (value == null) {
            return { isValid: true };
        }

        let numericValue = Number(value);

        if (numericValue < min || numericValue > max) {
            error = errorMessage;
        }

        return {
            isValid: error === '',
            error
        };
    }
}
