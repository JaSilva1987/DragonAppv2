export interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
}
