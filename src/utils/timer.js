let timeoutId = '';

const timer = (actions,time) => {
    if(timeoutId)
        clearTimeout(timeoutId)

    actions.first()

    timeoutId = setTimeout(() => { 
        timeoutId = ''
        actions.last()
    }, time)
}
export default timer;