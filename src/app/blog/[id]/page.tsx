import { notFound } from 'next/navigation';
import BlogPage from '../page';
import YamashitaGoldPage from '../yamashita-gold/page';
import LostDutchmanPage from '../lost-dutchman/page';
import MontezumaTreasurePage from '../montezumas-treasure/page';
import SanMiguelPage from '../san-miguel/page';
import OakIslandPage from '../oak-island/page';
import CaptainBlackheartPage from '../captain-blackheart/page';
import TreasureOfLimaPage from '../treasure-of-lima/page';
import ElDoradoPage from '../el-dorado/page';
import CityOfTheCaesarsPage from '../city-of-the-caesars/page';
import TreasureOfTheTrinityPage from '../treasure-of-the-trinity/page';
import TheMerchantRoyalPage from '../the-merchant-royal/page';
import KingJohnsCrownJewelsPage from '../king-johns-crown-jewels/page';
import TreasureOfTheKnightsTemplarPage from '../the-treasure-of-the-knights-templar/page';
import SunkenGalleonAzureCoastPage from '../the-sunken-galleon-of-the-azure-coast/page';
import TheNaziGoldTrainPage from '../the-nazi-gold-train/page';
import TheAmberRoomPage from '../the-amber-room/page';
import TheTombOfCleopatraPage from '../the-tomb-of-cleopatra/page';
import TheTreasureOfTheCopperScrollPage from '../the-treasure-of-the-copper-scroll/page';
import TheWreckOfTheSaoJoaoPage from '../the-wreck-of-the-sao-joao/page';
import TheSecretLibraryOfOtrarPage from '../the-secret-library-of-otrar/page';
import TheLostHoardOfBactriaPage from '../the-lost-hoard-of-bactria/page';
import TheSunkenTreasureOfIssykKulPage from '../the-sunken-treasure-of-issyk-kul/page';
import PadmanabhaswamyTempleVaultBPage from '../padmanabhaswamy-temple-vault-b/page';
import TheCzarsLostGoldPage from '../the-czars-lost-gold/page';
import TheLostTombOfGenghisKhanPage from '../the-lost-tomb-of-genghis-khan/page';
import TheImperialSealOfChinaPage from '../the-imperial-seal-of-china/page';
import TheWreckOfTheFlorDeLaMarPage from '../the-wreck-of-the-flor-de-la-mar/page';
import TheAwaMaruPage from '../the-awa-maru/page';
import SwordOfKusanagiPage from '../sword-of-kusanagi/page';
import TheNuestraSenoraDeLaConcepcionPage from '../the-nuestra-senora-de-la-concepcion/page';
import LassetersReefPage from '../lasseters-reef/page';

export default async function BlogIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (['23', 'sao-joao', 'são-joão', 'the-wreck-of-the-sao-joao', 'wreck-of-the-sao-joao', 'the-sao-joao', 'the-são-joão', 'port-edward'].includes(id)) {
    return <TheWreckOfTheSaoJoaoPage />;
  }

  if (['15', 'copper-scroll', 'the-copper-scroll', 'the-treasure-of-the-copper-scroll', 'treasure-of-the-copper-scroll', '3q15'].includes(id)) {
    return <TheTreasureOfTheCopperScrollPage />;
  }

  if (['20', 'cleopatra', 'tomb-of-cleopatra', 'the-tomb-of-cleopatra', 'taposiris-magna'].includes(id)) {
    return <TheTombOfCleopatraPage />;
  }

  if (['4', 'amber-room', 'the-amber-room', 'amber', 'bernsteinzimmer'].includes(id)) {
    return <TheAmberRoomPage />;
  }

  if (['1', 'captain-blackheart', 'the-lost-treasure-of-captain-blackheart', 'lost-treasure-of-captain-blackheart', 'blackheart'].includes(id)) {
    return <CaptainBlackheartPage />;
  }

  if (['2', 'azure-coast', 'the-sunken-galleon-of-the-azure-coast', 'sunken-galleon-azure-coast', 'sunken-galleon-of-the-azure-coast', 'saint-tropez'].includes(id)) {
    return <SunkenGalleonAzureCoastPage />;
  }

  if (['5', '33', '34', 'yamashita-gold', 'yamashitas-gold', 'yamashita'].includes(id)) {
    return <YamashitaGoldPage />;
  }

  if (['29', 'santa-maria'].includes(id)) {
    return <BlogPage />;
  }

  if (['7', 'lost-dutchman', 'lost-dutchmans-gold-mine', 'lost-dutchman-gold-mine'].includes(id)) {
    return <LostDutchmanPage />;
  }

  if (['22', 'montezuma', 'montezumas-treasure', 'montezuma-treasure'].includes(id)) {
    return <MontezumaTreasurePage />;
  }

  if (['32', 'san-miguel', 'the-san-miguel'].includes(id)) {
    return <SanMiguelPage />;
  }

  if (['30', 'awa-maru', 'the-awa-maru', 'the-wreck-of-the-awa-maru', 'wreck-of-the-awa-maru', 'peking-man-treasure'].includes(id)) {
    return <TheAwaMaruPage />;
  }

  if (['8', 'oak-island', 'oak-island-money-pit'].includes(id)) {
    return <OakIslandPage />;
  }

  if (['9', 'flor-de-la-mar', 'the-wreck-of-the-flor-de-la-mar', 'wreck-of-the-flor-de-la-mar', 'the-flor-de-la-mar', 'flor-do-mar', 'the-flor-do-mar', 'malacca-treasure'].includes(id)) {
    return <TheWreckOfTheFlorDeLaMarPage />;
  }

  if (['10', 'treasure-of-lima', 'the-treasure-of-lima', 'lima', 'cocos-island'].includes(id)) {
    return <TreasureOfLimaPage />;
  }

  if (['3', 'el-dorado', 'el-dorado-the-lost-city-of-gold', 'lost-city-of-gold', 'dorado'].includes(id)) {
    return <ElDoradoPage />;
  }

  if (['13', 'city-of-the-caesars', 'the-city-of-the-caesars', 'caesars', 'ciudad-de-los-cesares', 'trapalanda'].includes(id)) {
    return <CityOfTheCaesarsPage />;
  }

  if (['12', 'king-johns-crown-jewels', 'king-john-crown-jewels', 'king-john', 'the-wash', 'crown-jewels'].includes(id)) {
    return <KingJohnsCrownJewelsPage />;
  }

  if (['16', 'lasseter', 'lasseters-reef', 'the-lasseters-reef', 'lasseter-reef', 'lasseters-gold-reef'].includes(id)) {
    return <LassetersReefPage />;
  }

  if (['17', 'nazi-gold-train', 'the-nazi-gold-train', 'gold-train', 'walbrzych'].includes(id)) {
    return <TheNaziGoldTrainPage />;
  }

  if (['18', 'trinity', 'treasure-of-the-trinity', 'the-treasure-of-the-trinity', 'trindade', 'treasure-of-trinity'].includes(id)) {
    return <TreasureOfTheTrinityPage />;
  }

  if (['6', 'knights-templar', 'the-treasure-of-the-knights-templar', 'treasure-of-the-knights-templar', 'templar'].includes(id)) {
    return <TreasureOfTheKnightsTemplarPage />;
  }

  if (['28', 'merchant-royal', 'the-merchant-royal'].includes(id)) {
    return <TheMerchantRoyalPage />;
  }

  if (['27', 'otrar', 'the-secret-library-of-otrar', 'secret-library-of-otrar', 'otrar-library', 'library-of-otrar'].includes(id)) {
    return <TheSecretLibraryOfOtrarPage />;
  }

  if (['25', 'bactria', 'the-lost-hoard-of-bactria', 'lost-hoard-of-bactria', 'bactrian-gold', 'bactrian-hoard', 'the-bactrian-hoard'].includes(id)) {
    return <TheLostHoardOfBactriaPage />;
  }

  if (['26', 'issyk-kul', 'lake-issyk-kul', 'the-sunken-treasure-of-issyk-kul', 'sunken-treasure-of-issyk-kul', 'the-sunken-treasure-of-lake-issyk-kul'].includes(id)) {
    return <TheSunkenTreasureOfIssykKulPage />;
  }

  if (['14', 'padmanabhaswamy', 'padmanabhaswamy-temple-vault-b', 'the-padmanabhaswamy-temple-vault-b', 'vault-b', 'padmanabhaswamy-vault-b', 'kerala-temple', 'sree-padmanabhaswamy'].includes(id)) {
    return <PadmanabhaswamyTempleVaultBPage />;
  }

  if (['11', 'czars-lost-gold', 'the-czars-lost-gold', 'tsars-lost-gold', 'the-tsars-lost-gold', 'lake-baikal', 'baikal-gold', 'kolchak-gold', 'the-czar-lost-gold', 'czar-lost-gold'].includes(id)) {
    return <TheCzarsLostGoldPage />;
  }

  if (['24', 'genghis-khan', 'the-lost-tomb-of-genghis-khan', 'lost-tomb-of-genghis-khan', 'tomb-of-genghis-khan', 'the-tomb-of-genghis-khan', 'genghis-khan-tomb', 'khentii-mountains', 'burkhan-khaldun'].includes(id)) {
    return <TheLostTombOfGenghisKhanPage />;
  }

  if (['19', 'imperial-seal', 'the-imperial-seal', 'the-imperial-seal-of-china', 'imperial-seal-of-china', 'heirloom-seal', 'heirloom-seal-of-the-realm', 'chuan-guo-yu-xi', 'chuanguo-yuxi'].includes(id)) {
    return <TheImperialSealOfChinaPage />;
  }

  if (['21', 'kusanagi', 'sword-of-kusanagi', 'the-sword-of-kusanagi', 'kusanagi-no-tsurugi', 'atsuta-shrine'].includes(id)) {
    return <SwordOfKusanagiPage />;
  }

  if (['31', 'concepcion', 'concepción', 'nuestra-senora-de-la-concepcion', 'the-nuestra-senora-de-la-concepcion', 'nuestra-señora-de-la-concepción', 'the-nuestra-señora-de-la-concepción', 'saipan-galleon'].includes(id)) {
    return <TheNuestraSenoraDeLaConcepcionPage />;
  }

  notFound();
}


