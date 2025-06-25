interface TiTleProps {
    children: React.ReactNode;
}

export const Title = ({ children }: TiTleProps) => {
    return (
        <h1 className= " text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl "> {children} </h1>
    );
};