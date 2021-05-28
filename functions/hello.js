exports.handler = async (e) => {
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello my good man"})
    }
}
