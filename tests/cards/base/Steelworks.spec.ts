import {expect} from 'chai';
import {Steelworks} from '../../../src/cards/base/Steelworks';
import {Game} from '../../../src/Game';
import {Player} from '../../../src/Player';
import {TestPlayers} from '../../TestingUtils';

describe('Steelworks', function() {
  let card : Steelworks; let player : Player; let game : Game;

  beforeEach(function() {
    card = new Steelworks();
    player = TestPlayers.BLUE.newPlayer();
    const redPlayer = TestPlayers.RED.newPlayer();
    game = new Game('foobar', [player, redPlayer], player);
  });

  it('Can\'t act', function() {
    player.energy = 3;
    expect(card.canAct(player, game)).is.not.true;
  });

  it('Should act', function() {
    player.energy = 4;
    expect(card.canAct(player, game)).is.true;

    card.action(player, game);
    expect(player.energy).to.eq(0);
    expect(player.steel).to.eq(2);
    expect(game.getOxygenLevel()).to.eq(1);
  });
});
