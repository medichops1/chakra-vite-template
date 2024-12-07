import { Button, type ButtonProps } from "@/components/ui/button";

interface Props extends ButtonProps {
  href?: string;
}

export const SidebarLink = (props: Props) => {
  const { children, href, ...buttonProps } = props;
  return (
    <Button
      variant="ghost"
      width="full"
      justifyContent="start"
      gap="3"
      color="fg.muted"
      _hover={{
        bg: "red.500",
        color: "white",
      }}
      _currentPage={{
        color: "red.500",
      }}
      asChild
      {...buttonProps}
    >
      <a href={href}>{children}</a>
    </Button>
  );
};
