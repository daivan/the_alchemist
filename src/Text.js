export default class Text {
    constructor(text, size, font, color, x, y, anchor, textAlign) {
        this.text = text;
        this.size = size;
        this.font = `${size}px ${font}`;
        this.color = color;
        this.x = x;
        this.y = y;
        this.anchor = anchor;
        this.textAlign = textAlign;
    }

    update(newText) {
        this.text = newText;
    }

    render(context, scaleFactor) {
        context.save(); // Save the current context state

        // Handle the anchor and text alignment
        if (this.anchor === 'middle') {
            context.textBaseline = 'middle';
        } else if (this.anchor === 'end') {
            context.textBaseline = 'bottom';
        } else {
            context.textBaseline = 'top';
        }

        context.textAlign = this.textAlign;
        context.font = this.font;
        context.fillStyle = this.color;

        //if this.text is not a string convert it to a string
        if (typeof this.text !== 'string') {
            this.text = this.text.toString();
        }
        // Split text into lines based on line breaks
        const lines = this.text.split('\n');

        // Draw each line separately
        for (let i = 0; i < lines.length; i++) {
            const lineY = this.y * scaleFactor + i * this.size; // Calculate Y position for each line
            context.fillText(lines[i], this.x * scaleFactor, lineY); // Draw the line
        }

        context.restore(); // Restore the context state
    }
}
