import { TrackJS } from 'trackjs';
import { diving } from "./Diving";

TrackJS.install({
  token: '0f7e23591f804f3790cb2deab91863d3',
  application: "prod-diving-site"
});

diving();

TrackJS.track('testing!')
