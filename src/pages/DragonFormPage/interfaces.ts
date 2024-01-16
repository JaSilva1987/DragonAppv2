import { Dragon } from "../Home/interfaces";

export interface DragonFormPageProps {
  onClose?: () => void;
  updateDragonList: (newDragon: Dragon) => void;
  initialDragon?: Dragon | null;
}
