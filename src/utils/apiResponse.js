class ApiResponse {

    // Success Response (200)
    static success(res, message = "Success", data = null, statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data
        });
    }

    // Created Response (201)
    static created(res, message = "Created Successfully", data = null) {
        return res.status(201).json({
            success: true,
            message,
            data
        });
    }

    // Error Response
    static error(res, message = "Something went wrong", statusCode = 500) {
        return res.status(statusCode).json({
            success: false,
            message
        });
    }

    // Validation Error
    static validationError(res, errors) {
        return res.status(422).json({
            success: false,
            message: "Validation Failed",
            errors
        });
    }

    // Not Found
    static notFound(res, message = "Resource not found") {
        return res.status(404).json({
            success: false,
            message
        });
    }

    // Unauthorized
    static unauthorized(res, message = "Unauthorized") {
        return res.status(401).json({
            success: false,
            message
        });
    }

    // Forbidden
    static forbidden(res, message = "Forbidden") {
        return res.status(403).json({
            success: false,
            message
        });
    }

}

module.exports = ApiResponse;