import * as React from "react";

export type CardContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  containerClassName?: string;
};

export function CardContainer({
  className,
  containerClassName,
  ...props
}: CardContainerProps) {
  return (
    <div className={containerClassName}>
      <div className={className} {...props} />
    </div>
  );
}

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

export function CardBody({ className, ...props }: CardBodyProps) {
  return <div className={className} {...props} />;
}

export type CardItemProps = React.HTMLAttributes<HTMLDivElement> & {
  translateZ?: number | string;
  as?: React.ElementType;
};

export function CardItem({
  as: Comp = "div",
  className,
  // translateZ is accepted for API compatibility with common 3D card implementations
  // but is not required for build correctness.
  translateZ: _translateZ,
  ...props
}: CardItemProps) {
  return <Comp className={className} {...props} />;
}
