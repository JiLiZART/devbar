import {
  VIEW_STATE_ACTIVE,
  VIEW_STATE_FULL,
} from "../constants/viewStateConstants";
import { PLACEMENT_BOTTOM_RIGHT } from "../constants/placementConstants";
import { SIZE_MD } from "../constants/sizeConstants";

export default {
  barActive: (state) => state.settings.barActive,
  tabs: (state) => state.tabs,
  logo: (state) => state.logo,
  viewState: (state) => state.settings.viewState,
  viewStateActive: (state) => state.settings.viewState === VIEW_STATE_ACTIVE,
  viewStateFull: (state) => state.settings.viewState === VIEW_STATE_FULL,
  placement: (state) =>
    state.placement ? state.settings.placement : PLACEMENT_BOTTOM_RIGHT,
  size: (state) => (state.size ? state.size : SIZE_MD),
  sticky: () => true,
  iframeUrl: (state) => state.iframeUrl,
};
