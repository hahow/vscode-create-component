const TYPE_TEMPLATE = `export type PropsAreEqual<P> = (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean;
`;

export default TYPE_TEMPLATE;
