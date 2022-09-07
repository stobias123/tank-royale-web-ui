const predraw = (context, canvas) => {
    context.save()
    resizeCanvasToDisplaySize(context, canvas)
    const { width, height } = context.canvas
    context.clearRect(0, 0, width, height)
}