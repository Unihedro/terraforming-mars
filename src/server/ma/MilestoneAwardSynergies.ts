import {MilestoneName} from '../../common/ma/MilestoneName';
import {AwardName} from '../../common/ma/AwardName';
import {Awards} from '../awards/Awards';
import {Milestones} from '../milestones/Milestones';

// Higher synergies represent similar milestones or awards. For instance, Terraformer rewards for high TR
// and the Benefactor award is given to the player with the highets TR. Their synergy weight is 9, very high.

const synergiesData: Array<[MilestoneName | AwardName, MilestoneName | AwardName, number]> = [
  ['Terraformer', 'Benefactor', 9],
  ['Gardener', 'Cultivator', 9],
  ['Builder', 'Contractor', 9],
  ['Networker', 'Entrepreneur', 9],
  ['One Giant Step', 'Full Moon', 9],
  ['Lunarchitect', 'Lunar Magnate', 9],
  ['One Giant Step', 'Lunarchitect', 9],
  ['Full Moon', 'Lunar Magnate', 9],
  ['Estate Dealer', 'Cultivator', 8],
  ['Landlord', 'Cultivator', 8],
  ['Landlord', 'Desert Settler', 7],
  ['Landlord', 'Estate Dealer', 7],
  ['Desert Settler', 'Cultivator', 7],
  ['Miner', 'Industrialist', 7],
  ['One Giant Step', 'Lunar Magnate', 7],
  ['Lunarchitect', 'Full Moon', 7],
  ['Energizer', 'Industrialist', 6],
  ['Gardener', 'Landlord', 6],
  ['Mayor', 'Landlord', 6],
  ['Mayor', 'Cultivator', 6],
  ['Gardener', 'Estate Dealer', 5],
  ['Builder', 'Magnate', 5],
  ['Tycoon', 'Magnate', 5],
  ['Polar Explorer', 'Desert Settler', 5],
  ['Hoverlord', 'Excentric', 5],
  ['Hoverlord', 'Venuphile', 5],
  ['Desert Settler', 'Estate Dealer', 5],
  ['Builder', 'Tycoon', 4],
  ['Specialist', 'Energizer', 4],
  ['Mayor', 'Polar Explorer', 4],
  ['Mayor', 'Desert Settler', 4],
  ['Mayor', 'Estate Dealer', 4],
  ['Gardener', 'Polar Explorer', 4],
  ['Gardener', 'Desert Settler', 4],
  ['Ecologist', 'Excentric', 4],
  ['Polar Explorer', 'Landlord', 4],
  ['Mayor', 'Gardener', 3],
  ['Tycoon', 'Excentric', 3],
  ['Polar Explorer', 'Cultivator', 3],
  ['Energizer', 'Thermalist', 3],
  ['Rim Settler', 'Space Baron', 3],
  ['Celebrity', 'Space Baron', 3],
  ['Benefactor', 'Cultivator', 3],
  ['Gardener', 'Benefactor', 2],
  ['Specialist', 'Banker', 2],
  ['Ecologist', 'Tycoon', 2],
  ['Ecologist', 'Diversifier', 2],
  ['Tycoon', 'Scientist', 2],
  ['Tycoon', 'Contractor', 2],
  ['Tycoon', 'Venuphile', 2],
  ['Polar Explorer', 'Estate Dealer', 2],
  ['Rim Settler', 'Celebrity', 2],
  ['Scientist', 'Magnate', 2],
  ['Magnate', 'Space Baron', 2],
  ['Excentric', 'Venuphile', 2],
  ['Terraformer', 'Cultivator', 2],
  ['Terraformer', 'Gardener', 2],
  ['Builder', 'Miner', 1],
  ['Builder', 'Industrialist', 1],
  ['Planner', 'Scientist', 1],
  ['Generalist', 'Miner', 1],
  ['Specialist', 'Thermalist', 1],
  ['Specialist', 'Miner', 1],
  ['Specialist', 'Industrialist', 1],
  ['Ecologist', 'Cultivator', 1],
  ['Ecologist', 'Magnate', 1],
  ['Tycoon', 'Diversifier', 1],
  ['Tycoon', 'Tactician', 1],
  ['Tycoon', 'Rim Settler', 1],
  ['Tycoon', 'Space Baron', 1],
  ['Diversifier', 'Magnate', 1],
  ['Tactician', 'Scientist', 1],
  ['Tactician', 'Magnate', 1],
  ['Rim Settler', 'Magnate', 1],
  ['Banker', 'Benefactor', 1],
  ['Celebrity', 'Magnate', 1],
  ['Desert Settler', 'Benefactor', 1],
  ['Estate Dealer', 'Benefactor', 1],
  ['Terraformer', 'Landlord', 1],
  ['Terraformer', 'Thermalist', 1],
  ['Terraformer', 'Desert Settler', 1],
  ['Terraformer', 'Estate Dealer', 1],
  ['Gardener', 'Ecologist', 1],

  // Vastitas Borealis
  ['Smith', 'Generalist', 2],
  ['Smith', 'Specialist', 5],
  ['Smith', 'Rim Settler', 3],
  ['Smith', 'Miner', 8],
  ['Smith', 'Industrialist', 5],

  ['Tradesman', 'Ecologist', 6],
  ['Tradesman', 'Diversifier', 3],
  ['Tradesman', 'Hoverlord', 6],
  ['Tradesman', 'Excentric', 8],
  ['Tradesman', 'Venuphile', 4],

  ['Irrigator', 'Mayor', 3],
  ['Irrigator', 'Gardener', 3],
  ['Irrigator', 'Polar Explorer', 3],
  ['Irrigator', 'Landlord', 4],
  ['Irrigator', 'Desert Settler', 5],
  ['Irrigator', 'Estate Dealer', 9],
  ['Irrigator', 'Cultivator', 4],

  ['Adapter', 'Ecologist', 2],
  ['Adapter', 'Tactician', 3],
  ['Adapter', 'Scientist', 5],

  ['Edgedancer', 'Mayor', 2],
  ['Edgedancer', 'Gardener', 4],
  ['Edgedancer', 'Polar Explorer', 5],
  ['Edgedancer', 'Desert Settler', 5],
  ['Edgedancer', 'Estate Dealer', 1],
  ['Edgedancer', 'Cultivator', 4],
  ['Edgedancer', 'Irrigator', 1],

  ['Naturalist', 'Terraformer', 3],
  ['Naturalist', 'Gardener', 2],
  ['Naturalist', 'Generalist', 2],
  ['Naturalist', 'Specialist', 1],
  ['Naturalist', 'Landlord', 4],
  ['Naturalist', 'Thermalist', 6],
  ['Naturalist', 'Desert Settler', 1],
  ['Naturalist', 'Estate Dealer', 1],
  ['Naturalist', 'Benefactor', 5],
  ['Naturalist', 'Cultivator', 3],
  ['Naturalist', 'Edgedancer', 1],

  // Start of fan synergies:
  ['Voyager', 'Rim Settler', 9],
  ['Pioneer', 'Colonizer', 9],

  ['Networker', 'Terraformer', 1],
  ['Lunarchitect', 'Terraformer', 2],
  ['Farmer', 'Terraformer', 2],
  ['Tropicalist', 'Terraformer', 1],
  ['Economizer', 'Terraformer', 2],
  ['Firestarter', 'Terraformer', 1],
  ['Terra Pioneer', 'Terraformer', 1],
  ['Gambler', 'Terraformer', 0.5],
  ['Irrigator', 'Terraformer', 1],
  ['Lunar Magnate', 'Terraformer', 2],
  ['Historian', 'Terraformer', 1],
  ['Tourist', 'Terraformer', 1],
  ['Botanist', 'Terraformer', 2],
  ['Coordinator', 'Terraformer', 1],
  ['Edgedancer', 'Terraformer', 1],
  ['Naturalist', 'Terraformer', 3],
  ['Networker', 'Mayor', 2],
  ['Tropicalist', 'Mayor', 4],
  ['Terra Pioneer', 'Mayor', 4],
  ['Gambler', 'Mayor', 0.5],
  ['Irrigator', 'Mayor', 3],
  ['Tourist', 'Mayor', 1],
  ['Cosmic Settler', 'Mayor', 5],
  ['Urbanist', 'Mayor', 5],
  ['Edgedancer', 'Mayor', 2],
  ['Networker', 'Gardener', 2],
  ['Farmer', 'Gardener', 5],
  ['Tropicalist', 'Gardener', 4],
  ['Terra Pioneer', 'Gardener', 4],
  ['Gambler', 'Gardener', 0.5],
  ['Irrigator', 'Gardener', 3],
  ['Tourist', 'Gardener', 1],
  ['Botanist', 'Gardener', 5],
  ['Biologist', 'Gardener', 1],
  ['Edgedancer', 'Gardener', 4],
  ['Naturalist', 'Gardener', 2],
  ['Collector', 'Builder', 2],
  ['Gambler', 'Builder', 0.5],
  ['Smith', 'Builder', 1],
  ['Curator', 'Builder', 7],
  ['Engineer', 'Builder', 3],
  ['Manufacturer', 'Builder', 1],
  ['Urbanist', 'Builder', 3],
  ['Collector', 'Planner', 1],
  ['Gambler', 'Planner', 0.5],
  ['Manufacturer', 'Planner', 1],
  ['Hoarder', 'Planner', 4],
  ['Farmer', 'Generalist', 1],
  ['Economizer', 'Generalist', 1],
  ['Gambler', 'Generalist', 0.5],
  ['Smith', 'Generalist', 2],
  ['Engineer', 'Generalist', 4],
  ['Botanist', 'Generalist', 1],
  ['Naturalist', 'Generalist', 2],
  ['Farmer', 'Specialist', 3],
  ['Economizer', 'Specialist', 4],
  ['Gambler', 'Specialist', 0.5],
  ['Smith', 'Specialist', 5],
  ['Capitalist', 'Specialist', 1],
  ['Engineer', 'Specialist', 4],
  ['Botanist', 'Specialist', 3],
  ['Naturalist', 'Specialist', 1],
  ['Farmer', 'Ecologist', 3],
  ['Gambler', 'Ecologist', 0.5],
  ['Tradesman', 'Ecologist', 6],
  ['Curator', 'Ecologist', 1],
  ['A. Zoologist', 'Ecologist', 2],
  ['Botanist', 'Ecologist', 3],
  ['Zoologist', 'Ecologist', 2],
  ['Biologist', 'Ecologist', 9],
  ['Adapter', 'Ecologist', 2],
  ['Naturalist', 'Ecologist', 1],
  ['Networker', 'Tycoon', 1],
  ['One Giant Step', 'Tycoon', 2],
  ['Lunarchitect', 'Tycoon', 1],
  ['Minimalist', 'Tycoon', 1],
  ['Terran', 'Tycoon', 1],
  ['Land Specialist', 'Tycoon', 1],
  ['Martian', 'Tycoon', 1],
  ['Businessperson', 'Tycoon', 1],
  ['Collector', 'Tycoon', 3],
  ['Spacefarer', 'Tycoon', 2],
  ['Gambler', 'Tycoon', 0.5],
  ['Electrician', 'Tycoon', 1],
  ['Tradesman', 'Tycoon', 2],
  ['Entrepreneur', 'Tycoon', 1],
  ['Full Moon', 'Tycoon', 1],
  ['Lunar Magnate', 'Tycoon', 1],
  ['Curator', 'Tycoon', 2],
  ['Engineer', 'Tycoon', 1],
  ['A. Zoologist', 'Tycoon', 2],
  ['Botanist', 'Tycoon', 1],
  ['Manufacturer', 'Tycoon', 4],
  ['Zoologist', 'Tycoon', 2],
  ['Biologist', 'Tycoon', 1],
  ['T. Economizer', 'Tycoon', 2],
  ['Warmonger', 'Tycoon', 1],
  ['Adapter', 'Tycoon', 1],
  ['Naturalist', 'Tycoon', 1],
  ['Voyager', 'Tycoon', 1],
  ['Collector', 'Legend', 5],
  ['Gambler', 'Legend', 0.5],
  ['Historian', 'Legend', 8],
  ['Coordinator', 'Legend', 8],
  ['Warmonger', 'Legend', 2],
  ['Collector', 'Diversifier', 1],
  ['Gambler', 'Diversifier', 0.5],
  ['Tradesman', 'Diversifier', 3],
  ['A. Zoologist', 'Diversifier', 1],
  ['Manufacturer', 'Diversifier', 1],
  ['Zoologist', 'Diversifier', 1],
  ['Collector', 'Tactician', 1],
  ['Gambler', 'Tactician', 0.5],
  ['Manufacturer', 'Tactician', 1],
  ['Adapter', 'Tactician', 9],
  ['Networker', 'Polar Explorer', 3],
  ['Farmer', 'Polar Explorer', 1],
  ['Land Specialist', 'Polar Explorer', 4],
  ['Terra Pioneer', 'Polar Explorer', 6],
  ['Gambler', 'Polar Explorer', 0.5],
  ['Irrigator', 'Polar Explorer', 3],
  ['Entrepreneur', 'Polar Explorer', 4],
  ['Tourist', 'Polar Explorer', 2],
  ['Edgedancer', 'Polar Explorer', 5],
  ['Colonizer', 'Energizer', 3],
  ['Pioneer', 'Energizer', 3],
  ['Firestarter', 'Energizer', 2],
  ['Gambler', 'Energizer', 0.5],
  ['Electrician', 'Energizer', 8],
  ['Engineer', 'Energizer', 4],
  ['Spacefarer', 'Rim Settler', 3],
  ['Gambler', 'Rim Settler', 0.5],
  ['Smith', 'Rim Settler', 3],
  ['Capitalist', 'Rim Settler', 1],
  ['Voyager', 'Rim Settler', 9],
  ['Gambler', 'Hoverlord', 0.5],
  ['Tradesman', 'Hoverlord', 6],
  ['Manufacturer', 'Hoverlord', 1],
  ['Networker', 'Landlord', 4],
  ['Lunarchitect', 'Landlord', 7],
  ['Farmer', 'Landlord', 1],
  ['Tropicalist', 'Landlord', 6],
  ['Land Specialist', 'Landlord', 4],
  ['Terra Pioneer', 'Landlord', 9],
  ['Irrigator', 'Landlord', 4],
  ['Entrepreneur', 'Landlord', 4],
  ['Lunar Magnate', 'Landlord', 7],
  ['Tourist', 'Landlord', 2],
  ['Cosmic Settler', 'Landlord', 3],
  ['Botanist', 'Landlord', 1],
  ['Urbanist', 'Landlord', 4],
  ['Edgedancer', 'Landlord', 4],
  ['Naturalist', 'Landlord', 4],
  ['Curator', 'Scientist', 4],
  ['Manufacturer', 'Scientist', 2],
  ['Adapter', 'Scientist', 5],
  ['Hoarder', 'Scientist', 4],
  ['Colonizer', 'Banker', 1],
  ['Pioneer', 'Banker', 1],
  ['Capitalist', 'Banker', 2],
  ['T. Economizer', 'Banker', 1],
  ['Economizer', 'Thermalist', 8],
  ['Firestarter', 'Thermalist', 7],
  ['Naturalist', 'Thermalist', 6],
  ['One Giant Step', 'Miner', 1],
  ['Lunarchitect', 'Miner', 3],
  ['Spacefarer', 'Miner', 1],
  ['Smith', 'Miner', 8],
  ['Full Moon', 'Miner', 1],
  ['Lunar Magnate', 'Miner', 3],
  ['Engineer', 'Miner', 2],
  ['Cosmic Settler', 'Miner', 1],
  ['Urbanist', 'Miner', 1],
  ['Capitalist', 'Celebrity', 2],
  ['Manufacturer', 'Celebrity', 1],
  ['One Giant Step', 'Industrialist', 1],
  ['Lunarchitect', 'Industrialist', 3],
  ['Spacefarer', 'Industrialist', 1],
  ['Electrician', 'Industrialist', 3],
  ['Smith', 'Industrialist', 5],
  ['Full Moon', 'Industrialist', 1],
  ['Lunar Magnate', 'Industrialist', 3],
  ['Engineer', 'Industrialist', 2],
  ['Urbanist', 'Industrialist', 1],
  ['Networker', 'Desert Settler', 3],
  ['Farmer', 'Desert Settler', 1],
  ['Tropicalist', 'Desert Settler', 2],
  ['Land Specialist', 'Desert Settler', 4],
  ['Terra Pioneer', 'Desert Settler', 6],
  ['Irrigator', 'Desert Settler', 5],
  ['Entrepreneur', 'Desert Settler', 4],
  ['Tourist', 'Desert Settler', 2],
  ['Urbanist', 'Desert Settler', 1],
  ['Edgedancer', 'Desert Settler', 5],
  ['Naturalist', 'Desert Settler', 1],
  ['Networker', 'Estate Dealer', 3],
  ['Farmer', 'Estate Dealer', 1],
  ['Tropicalist', 'Estate Dealer', 5],
  ['Land Specialist', 'Estate Dealer', 4],
  ['Terra Pioneer', 'Estate Dealer', 6],
  ['Irrigator', 'Estate Dealer', 9],
  ['Entrepreneur', 'Estate Dealer', 4],
  ['Tourist', 'Estate Dealer', 1],
  ['Urbanist', 'Estate Dealer', 1],
  ['Edgedancer', 'Estate Dealer', 2],
  ['Naturalist', 'Estate Dealer', 1],
  ['Lunarchitect', 'Benefactor', 1],
  ['Farmer', 'Benefactor', 3],
  ['Economizer', 'Benefactor', 3],
  ['Firestarter', 'Benefactor', 1],
  ['Lunar Magnate', 'Benefactor', 1],
  ['Botanist', 'Benefactor', 3],
  ['Naturalist', 'Benefactor', 5],
  ['Networker', 'Cultivator', 2],
  ['Farmer', 'Cultivator', 5],
  ['Tropicalist', 'Cultivator', 4],
  ['Terra Pioneer', 'Cultivator', 4],
  ['Irrigator', 'Cultivator', 4],
  ['Tourist', 'Cultivator', 1],
  ['Botanist', 'Cultivator', 5],
  ['Biologist', 'Cultivator', 1],
  ['Edgedancer', 'Cultivator', 4],
  ['Naturalist', 'Cultivator', 3],
  ['Networker', 'Magnate', 1],
  ['One Giant Step', 'Magnate', 2],
  ['Minimalist', 'Magnate', 1],
  ['Terran', 'Magnate', 1],
  ['Land Specialist', 'Magnate', 1],
  ['Martian', 'Magnate', 1],
  ['Businessperson', 'Magnate', 1],
  ['Collector', 'Magnate', 3],
  ['Spacefarer', 'Magnate', 2],
  ['Electrician', 'Magnate', 1],
  ['Entrepreneur', 'Magnate', 1],
  ['Full Moon', 'Magnate', 1],
  ['Curator', 'Magnate', 2],
  ['Engineer', 'Magnate', 1],
  ['Botanist', 'Magnate', 1],
  ['Biologist', 'Magnate', 1],
  ['T. Economizer', 'Magnate', 2],
  ['Adapter', 'Magnate', 1],
  ['Naturalist', 'Magnate', 1],
  ['Voyager', 'Magnate', 1],
  ['Colonizer', 'Space Baron', 1],
  ['Pioneer', 'Space Baron', 4],
  ['Spacefarer', 'Space Baron', 9],
  ['Tradesman', 'Space Baron', 1],
  ['Curator', 'Space Baron', 2],
  ['Cosmic Settler', 'Space Baron', 5],
  ['Voyager', 'Space Baron', 3],
  ['Tradesman', 'Excentric', 8],
  ['A. Zoologist', 'Excentric', 8],
  ['Zoologist', 'Excentric', 7],
  ['Biologist', 'Excentric', 4],
  ['One Giant Step', 'Contractor', 1],
  ['Lunarchitect', 'Contractor', 1],
  ['Smith', 'Contractor', 4],
  ['Full Moon', 'Contractor', 1],
  ['Lunar Magnate', 'Contractor', 1],
  ['Curator', 'Contractor', 7],
  ['Engineer', 'Contractor', 2],
  ['Manufacturer', 'Contractor', 1],
  ['Urbanist', 'Contractor', 3],
  ['Tradesman', 'Venuphile', 4],
  ['Curator', 'Venuphile', 2],
  ['Manufacturer', 'Venuphile', 2],
  ['Adapter', 'Venuphile', 1],
  ['Tropicalist', 'Networker', 3],
  ['Land Specialist', 'Networker', 3],
  ['Terra Pioneer', 'Networker', 5],
  ['Gambler', 'Networker', 0.5],
  ['Irrigator', 'Networker', 3],
  ['Entrepreneur', 'Networker', 9],
  ['Tourist', 'Networker', 1],
  ['Manufacturer', 'Networker', 1],
  ['Edgedancer', 'Networker', 2],
  ['Lunarchitect', 'One Giant Step', 9],
  ['Spacefarer', 'One Giant Step', 1],
  ['Gambler', 'One Giant Step', 0.5],
  ['Smith', 'One Giant Step', 2],
  ['Full Moon', 'One Giant Step', 9],
  ['Lunar Magnate', 'One Giant Step', 7],
  ['Curator', 'One Giant Step', 2],
  ['Engineer', 'One Giant Step', 1],
  ['Manufacturer', 'One Giant Step', 1],
  ['Spacefarer', 'Lunarchitect', 1],
  ['Gambler', 'Lunarchitect', 0.5],
  ['Smith', 'Lunarchitect', 3],
  ['Full Moon', 'Lunarchitect', 7],
  ['Lunar Magnate', 'Lunarchitect', 9],
  ['Engineer', 'Lunarchitect', 1],
  ['Tourist', 'Lunarchitect', 2],
  ['Manufacturer', 'Lunarchitect', 1],
  ['Minimalist', 'Colonizer', 2],
  ['Pioneer', 'Colonizer', 9],
  ['Spacefarer', 'Colonizer', 4],
  ['Gambler', 'Colonizer', 0.5],
  ['Engineer', 'Colonizer', 1],
  ['Tropicalist', 'Farmer', 1],
  ['Gambler', 'Farmer', 0.5],
  ['Irrigator', 'Farmer', 1],
  ['Engineer', 'Farmer', 4],
  ['Tourist', 'Farmer', 1],
  ['Botanist', 'Farmer', 9],
  ['Biologist', 'Farmer', 3],
  ['Adapter', 'Farmer', 1],
  ['Naturalist', 'Farmer', 6],
  ['Pioneer', 'Minimalist', 2],
  ['Gambler', 'Minimalist', 0.5],
  ['Businessperson', 'Terran', 9],
  ['Gambler', 'Terran', 0.5],
  ['Curator', 'Terran', 1],
  ['Engineer', 'Terran', 1],
  ['Manufacturer', 'Terran', 1],
  ['Land Specialist', 'Tropicalist', 4],
  ['Terra Pioneer', 'Tropicalist', 8],
  ['Gambler', 'Tropicalist', 0.5],
  ['Irrigator', 'Tropicalist', 5],
  ['Entrepreneur', 'Tropicalist', 4],
  ['Tourist', 'Tropicalist', 2],
  ['Urbanist', 'Tropicalist', 1],
  ['Edgedancer', 'Tropicalist', 1],
  ['Firestarter', 'Economizer', 8],
  ['Gambler', 'Economizer', 0.5],
  ['Engineer', 'Economizer', 4],
  ['Naturalist', 'Economizer', 8],
  ['Spacefarer', 'Pioneer', 4],
  ['Gambler', 'Pioneer', 0.5],
  ['Electrician', 'Pioneer', 2],
  ['Terra Pioneer', 'Land Specialist', 7],
  ['Gambler', 'Land Specialist', 0.5],
  ['Irrigator', 'Land Specialist', 4],
  ['Entrepreneur', 'Land Specialist', 9],
  ['Tourist', 'Land Specialist', 2],
  ['Manufacturer', 'Land Specialist', 1],
  ['Edgedancer', 'Land Specialist', 4],
  ['Gambler', 'Martian', 0.5],
  ['Curator', 'Martian', 1],
  ['Manufacturer', 'Martian', 1],
  ['Gambler', 'Businessperson', 0.5],
  ['Curator', 'Businessperson', 1],
  ['Engineer', 'Businessperson', 1],
  ['Manufacturer', 'Businessperson', 1],
  ['Spacefarer', 'Collector', 1],
  ['Gambler', 'Collector', 0.5],
  ['Electrician', 'Collector', 1],
  ['Curator', 'Collector', 1],
  ['Historian', 'Collector', 1],
  ['Coordinator', 'Collector', 1],
  ['Manufacturer', 'Collector', 4],
  ['Biologist', 'Collector', 1],
  ['Adapter', 'Collector', 1],
  ['Gambler', 'Firestarter', 0.5],
  ['Electrician', 'Firestarter', 2],
  ['Engineer', 'Firestarter', 1],
  ['Naturalist', 'Firestarter', 5],
  ['Gambler', 'Terra Pioneer', 0.5],
  ['Irrigator', 'Terra Pioneer', 6],
  ['Entrepreneur', 'Terra Pioneer', 8],
  ['Tourist', 'Terra Pioneer', 2],
  ['Edgedancer', 'Terra Pioneer', 8],
  ['Gambler', 'Spacefarer', 0.5],
  ['Smith', 'Spacefarer', 1],
  ['Full Moon', 'Spacefarer', 1],
  ['Lunar Magnate', 'Spacefarer', 1],
  ['Curator', 'Spacefarer', 4],
  ['Cosmic Settler', 'Spacefarer', 5],
  ['Manufacturer', 'Spacefarer', 2],
  ['Voyager', 'Spacefarer', 3],
  ['Electrician', 'Gambler', 0.5],
  ['Smith', 'Gambler', 0.5],
  ['Tradesman', 'Gambler', 0.5],
  ['Irrigator', 'Gambler', 0.5],
  ['Capitalist', 'Gambler', 0.5],
  ['Curator', 'Electrician', 1],
  ['Engineer', 'Electrician', 3],
  ['Manufacturer', 'Electrician', 1],
  ['Full Moon', 'Smith', 2],
  ['Lunar Magnate', 'Smith', 3],
  ['Engineer', 'Smith', 5],
  ['Cosmic Settler', 'Smith', 1],
  ['Urbanist', 'Smith', 2],
  ['Voyager', 'Smith', 3],
  ['A. Zoologist', 'Tradesman', 7],
  ['Zoologist', 'Tradesman', 6],
  ['Biologist', 'Tradesman', 6],
  ['Adapter', 'Tradesman', 2],
  ['Entrepreneur', 'Irrigator', 4],
  ['Tourist', 'Irrigator', 1],
  ['Urbanist', 'Irrigator', 1],
  ['Edgedancer', 'Irrigator', 1],
  ['T. Economizer', 'Capitalist', 2],
  ['Voyager', 'Capitalist', 1],
  ['Manufacturer', 'Entrepreneur', 1],
  ['Lunar Magnate', 'Full Moon', 9],
  ['Curator', 'Full Moon', 2],
  ['Engineer', 'Full Moon', 1],
  ['Tourist', 'Lunar Magnate', 2],
  ['Biologist', 'Curator', 2],
  ['Voyager', 'Curator', 1],
  ['Botanist', 'Engineer', 4],
  ['Naturalist', 'Engineer', 4],
  ['Coordinator', 'Historian', 9],
  ['Warmonger', 'Historian', 2],
  ['Botanist', 'Tourist', 1],
  ['Edgedancer', 'Tourist', 2],
  ['Botanist', 'A. Zoologist', 2],
  ['Manufacturer', 'A. Zoologist', 1],
  ['Zoologist', 'A. Zoologist', 8],
  ['Biologist', 'A. Zoologist', 6],
  ['Naturalist', 'A. Zoologist', 2],
  ['Zoologist', 'Botanist', 2],
  ['Biologist', 'Botanist', 5],
  ['Naturalist', 'Botanist', 7],
  ['Warmonger', 'Coordinator', 2],
  ['Zoologist', 'Manufacturer', 1],
  ['Biologist', 'Zoologist', 6],
  ['Naturalist', 'Zoologist', 2],
  ['EdgeLord', 'Edgedancer', 9],
];

// This map uses keys of the format "X|Y" where X and Y are MA names. Entries are stored as "X|Y"
// and also "Y|X"; it just makes searching slightly faster. There will also be entries of the type "X|X".
//
// I honestly don't remember why "X|X" is useful, and it's possible it's no longer necessary. That's
// something that should be carefully conisdered and possibly removed', and not just propagated because
// it's what we had to begin with. In other words, someone figure out why, and preserve it, and document
// why, or be certain it's unnecessary and remove this paragraph and the code below that sets "X|X" to 1000.
//
class SynergyMap {
  private readonly map: Map<string, number> = new Map();
  public set(a: string, b: string, weight: number): void {
    this.map.set(a + '|' + b, weight);
    this.map.set(b + '|' + a, weight);
  }

  public get(a: string, b: string) {
    return this.map.get(a + '|' + b) || 0;
  }
}

export const synergies: SynergyMap = new SynergyMap();

Milestones.ALL.forEach((ma) => {
  // synergies.set(ma.name, 'Gambler', 1);
  synergies.set(ma.name, ma.name, 1000);
});
Awards.ALL.forEach((ma) => {
  // synergies.set(ma.name, 'Gambler', 1);
  synergies.set(ma.name, ma.name, 1000);
});

for (const [a, b, weight] of synergiesData) {
  synergies.set(a, b, weight);
}

