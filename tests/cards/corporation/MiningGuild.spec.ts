
import { expect } from "chai";
import { MiningGuild } from "../../../src/cards/corporation/MiningGuild";
import { Color } from "../../../src/Color";
import { Player } from "../../../src/Player";
import { SpaceBonus } from "../../../src/SpaceBonus";

describe("MiningGuild", function () {
    it("Should play", function () {
        const card = new MiningGuild();
        const player = new Player("test", Color.BLUE, false);
        const action = card.play(player);
        expect(action).to.eq(undefined);
        expect(player.steel).to.eq(5);
        expect(player.steelProduction).to.eq(1);
        card.onTilePlaced(player, []);
        expect(player.steelProduction).to.eq(1);
        card.onTilePlaced(player, [SpaceBonus.STEEL, SpaceBonus.TITANIUM]);
        expect(player.steelProduction).to.eq(2);
        card.onTilePlaced(player, [SpaceBonus.STEEL]);
        expect(player.steelProduction).to.eq(3);
        card.onTilePlaced(player, [SpaceBonus.TITANIUM]);
        expect(player.steelProduction).to.eq(4);
    });
});
