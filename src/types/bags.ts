import { ClearBagIcon, ClearPlasticBagIcon, ClutchIcon, WristletIcon, BackpackIcon, DuffelIcon, CameraBagIcon, BriefcaseIcon, ToteIcon, FannyPackIcon, PurseIcon } from '../components/icons/BagIcons';

export interface BagType {
  id: string;
  name: string;
  description: string;
  icon?: React.ComponentType;
  defaultDimensions?: {
    width: number;
    height: number;
    depth: number;
    unit: 'in' | 'cm';
  };
}

export const BAGS: BagType[] = [
  {
    id: 'clear',
    name: 'Clear Bag',
    defaultDimensions: {
      width: 12,
      height: 12,
      depth: 6,
      unit: 'in'
    },
    icon: ClearBagIcon
  },
  {
    id: 'clear_plastic',
    name: 'Clear Plastic Bag',
    icon: ClearPlasticBagIcon,
    defaultDimensions: {
      width: 12,
      height: 12,
      depth: 6,
      unit: 'in'
    }
  },
  {
    id: 'clutch',
    name: 'Clutch',
    icon: ClutchIcon,
    defaultDimensions: {
      width: 4.5,
      height: 6.5,
      depth: 1,
      unit: 'in'
    }
  },
  {
    id: 'wristlet',
    name: 'Wristlet/Wallet',
    icon: WristletIcon,
    defaultDimensions: {
      width: 4.5,
      height: 6.5,
      depth: 1,
      unit: 'in'
    }
  },
  {
    id: 'fanny_pack',
    name: 'Fanny Pack',
    icon: FannyPackIcon
  },
  {
    id: 'backpack',
    name: 'Backpack',
    icon: BackpackIcon
  },
  {
    id: 'purse',
    name: 'Purse',
    icon: PurseIcon
  },
  {
    id: 'duffel',
    name: 'Duffel Bag',
    icon: DuffelIcon
  },
  {
    id: 'camera_bag',
    name: 'Camera Bag',
    icon: CameraBagIcon
  },
  {
    id: 'briefcase',
    name: 'Briefcase',
    icon: BriefcaseIcon
  },
  {
    id: 'tote',
    name: 'Tote',
    icon: ToteIcon
  }
];