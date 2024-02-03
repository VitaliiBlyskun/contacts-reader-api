const controllerWrapper = controller => {
    const wrapperFunction = async (request, response, next) => {
        try {
            await controller(request, response, next)
        } catch (error) {
            next(error)
        }
    }
    return wrapperFunction;
}

module.exports = controllerWrapper;