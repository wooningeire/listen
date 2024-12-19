export class Listen<E extends EventTarget=any, P extends Parameters<E["addEventListener"]>=any> {
    private constructor(
        readonly target: E,
        readonly type: P[0],
        readonly handler: P[1],
        readonly options?: P[2],
    ) {}
    
    static for<E extends EventTarget=any, P extends Parameters<E["addEventListener"]>=any>(
        target: E, type: P[0], handler: P[1], options?: P[2],
    ): Listen<E, P> {
        target.addEventListener(type, handler, options);
        return new this(target, type, handler, options);
    }

    detach() {
        this.target.removeEventListener(this.type, this.handler, this.options);
    }
}