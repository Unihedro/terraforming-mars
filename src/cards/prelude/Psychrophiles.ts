import {IActionCard, IResourceCard} from '../ICard';
import {IProjectCard} from '../IProjectCard';
import {Tags} from '../Tags';
import {CardType} from '../CardType';
import {Player} from '../../Player';
import {Game} from '../../Game';
import {ResourceType} from '../../ResourceType';
import {CardName} from '../../CardName';

export class Psychrophiles implements IActionCard, IProjectCard, IResourceCard {
    public cost = 2;
    public resourceType = ResourceType.MICROBE;
    public resourceCount: number = 0;
    public tags = [Tags.MICROBES];
    public name = CardName.PSYCHROPHILES;
    public cardType = CardType.ACTIVE;

    public canPlay(player: Player, game: Game): boolean {
      return game.getTemperature() <= -20 + (player.getRequirementsBonus(game) * 2);
    }

    public play() {
      return undefined;
    }

    public canAct(): boolean {
      return true;
    }

    public action(player: Player) {
      player.addResourceTo(this);
      return undefined;
    }
}
