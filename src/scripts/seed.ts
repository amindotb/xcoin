import { Favorite } from "../models/Favorite";
import { Profile } from "../models/Profile";
import { Simulator } from "../models/Simulator";
import {
  IFavorite,
  IProfile,
  ISimulator,
} from '../types'

(async () => {
  console.log('> Seeding Started');

  const profileData: IProfile = {
    name: `String`,
    nickname: `String`,
    email: `String`,
    capital: 123,
    divisa: `String`,
    preferred_cryptocurrency: `String`,
  };
  const profile = new Profile(profileData);
  await profile.save();

  const simulatorData: ISimulator = {
    profile: profile._id,
    dateRecorded: new Date('01/05/2021'),
    cryptocurrency: `String`,
    euros: 0,
    price: 0,
    quantity: 0,
  };

  const favoriteData: IFavorite = {
    profile: profile._id,
    name: `String`,
    favorites: [ 'fav1', 'fav2', 'fav3' ],
  };

  const simulator = new Simulator(simulatorData);
  const favorite = new Favorite(favoriteData);

  await Promise.all([
    simulator.save(),
    favorite.save(),
  ]);

  console.log('> Seeding Finished');
})();
