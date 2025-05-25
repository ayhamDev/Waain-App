"use client";

import { AppText } from "@/components/AppText";
import AppContainer from "@/components/global/AppContainer";
import AppHeader from "@/components/global/AppHeader";
import { StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export default function HomeScreen() {
  const scrollY = useSharedValue(0);

  return (
    <AppContainer header={<AppHeader scrollY={scrollY} />} scrollY={scrollY}>
      <AppText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rerum,
        nesciunt eaque suscipit dolorum deserunt molestiae unde distinctio eum
        ea perspiciatis iure aut incidunt accusantium, magnam doloribus, impedit
        doloremque obcaecati. Vitae ut delectus ullam eum doloribus quasi
        temporibus exercitationem neque, harum, laboriosam dicta, perferendis
        quae reprehenderit magnam numquam? Qui odio accusantium repudiandae
        nisi, aspernatur excepturi sunt error assumenda eveniet fuga. Aliquid
        fuga eveniet cumque distinctio voluptas repellendus omnis repellat earum
        nisi at dolores, blanditiis sed maxime! Temporibus voluptatum at
        praesentium enim dolorem blanditiis, id quibusdam laboriosam ad? Dolore,
        a vitae? Tempora dolores ducimus aperiam et dignissimos dolor aliquam,
        enim mollitia repudiandae suscipit, eius ipsam ex incidunt consectetur
        itaque! Est minima tempore reiciendis, porro facilis at corporis quis
        amet qui laboriosam. Doloremque blanditiis sint inventore facilis,
        suscipit tempora corrupti, facere obcaecati consequuntur dignissimos
        ipsam placeat voluptatibus enim distinctio sunt. Sint temporibus
        sapiente cum ducimus commodi error odit fuga, pariatur asperiores
        beatae. Dolorum suscipit perferendis eius nobis earum dolorem. Eaque
        natus dicta omnis sed pariatur est laudantium dolorem repudiandae quod
        assumenda alias quisquam optio vitae, saepe illum, nemo recusandae vero
        mollitia beatae! Totam magnam recusandae voluptates illum porro
        consequatur dolor expedita sint? Totam molestias sapiente exercitationem
        natus ea? Sapiente nisi quae in doloribus a exercitationem assumenda
        distinctio, vero libero, illo veniam corrupti. Ipsum rem asperiores
        ullam voluptatibus perspiciatis, non ipsa quaerat laboriosam commodi aut
        illum nihil, quibusdam dolorem accusamus optio doloribus dolore
        recusandae labore consectetur? Accusamus officia repellat, iusto veniam
        neque eligendi. Ducimus dolor voluptates nisi repellendus, totam, culpa
        aliquam distinctio alias, nam illum ut ratione deleniti nihil officia
        amet repudiandae officiis id reprehenderit inventore. Accusantium
        molestias error numquam voluptatum quisquam? Dolores! Cum, earum dicta
        incidunt voluptatem magnam totam. Eos ad magnam id minima fugiat laborum
        ratione iste delectus quibusdam. Culpa, autem? Tempora suscipit quas aut
        doloremque quaerat impedit laudantium necessitatibus dolore. Est saepe,
        placeat quasi temporibus suscipit eius quos soluta assumenda animi,
        mollitia dolorem amet debitis ex sit? Sit ipsum officiis, natus minus
        praesentium temporibus pariatur voluptatum ab. Similique, nisi tempore.
        Necessitatibus ratione repellendus natus ipsam architecto minus
        voluptates dicta est laboriosam tempore blanditiis eius minima quasi nam
        quia a dignissimos voluptatem, provident veritatis in, cum commodi porro
        magnam? Eum, qui. Odio, exercitationem eum eos nisi possimus omnis,
        culpa quibusdam quia ducimus nesciunt nulla nihil doloremque veniam,
        laborum suscipit! Esse quidem rem eligendi? Quibusdam dolore cumque
        assumenda delectus enim exercitationem vitae. Aliquid iusto quidem
        maxime repudiandae quisquam neque quo nisi, laboriosam necessitatibus
        possimus repellat vero sunt mollitia, accusantium ab unde vel atque
        veniam ea similique enim. Laborum ipsam corporis quae nobis. Repellat
        magni doloremque numquam placeat eius accusantium, vel cupiditate ea
        illum esse dolore fugit sapiente optio minus cum aut ad sint veritatis
        natus. Nobis beatae ipsum aut atque praesentium modi. Possimus labore,
        minus id, ea nisi porro esse repudiandae iure rerum eveniet cupiditate
        quaerat ab maxime error aliquid, saepe placeat minima obcaecati fugiat
        sequi sapiente facilis? Aut blanditiis molestias labore. Molestias sequi
        rem impedit sint, inventore aut illum nesciunt sit esse maxime ratione
        enim eaque repellendus delectus ab ipsum. Fugiat neque natus, beatae non
        itaque maxime commodi mollitia illo officiis. Impedit, temporibus.
        Maiores dignissimos eum minima veritatis dolore eos reiciendis aliquid
        eius asperiores error libero odio eaque repudiandae, id fugiat
        repellendus porro aspernatur numquam ab sequi dolor ratione. Maxime,
        enim! Molestias adipisci rerum mollitia ducimus consectetur expedita
        quia non vel illo vero odit dicta culpa beatae dolorum magni quaerat,
        totam iusto repellat natus quibusdam eaque officiis! Numquam a assumenda
        eaque! Atque porro doloremque sunt, autem fuga nihil vel, id voluptatum
        nostrum, aperiam ipsam nemo ad perspiciatis! Accusamus dolores nisi
        quaerat doloribus quisquam molestiae recusandae est magni, ad, nemo
        officia officiis? Cupiditate porro molestiae iure cum! Reiciendis,
        suscipit totam, voluptates mollitia, amet rerum ducimus molestias
        repellat sequi quo aut. Numquam accusantium voluptate minus nihil omnis
        sunt minima sequi unde fugit aut. Eius recusandae itaque, rerum tempora
        voluptatum provident aut esse a fuga eligendi et, modi, eum sint neque.
        Nisi saepe excepturi ratione ut ducimus aut commodi, tempore vero,
        recusandae hic cum. Tenetur explicabo saepe alias nobis quos ea corrupti
        a repudiandae deserunt repellendus illo, veniam deleniti suscipit fuga
        blanditiis officia magni vel delectus, dolore animi nesciunt quidem est?
        Id, vero praesentium! Dolor et nobis vero accusamus sit dignissimos,
        nemo, autem reiciendis tempora quam quia fuga facere delectus quae
        consectetur totam eligendi cum fugiat? Aut pariatur obcaecati amet vel
        veritatis architecto ad! Quas, quos? Dicta, quisquam officia cumque
        excepturi ratione doloremque unde ipsa, mollitia autem dignissimos iste
        dolorem voluptatum saepe libero reprehenderit nobis id quam? Eligendi
        quia in, iste exercitationem aliquid nesciunt. Nam quos eos odio?
        Voluptates id quae nam deserunt veritatis esse atque cum delectus
        labore, libero eveniet animi! At dolorem officiis tenetur inventore,
        debitis hic molestiae omnis vero perferendis eligendi. Esse perspiciatis
        officia laborum quia ullam inventore voluptate optio ea repellendus quos
        at quae tempore ipsum ut sapiente delectus dolorum vero iste eligendi
        dolore necessitatibus, nostrum corporis culpa a? Excepturi. Tempora
        magnam incidunt doloribus expedita, veritatis enim, dolorem aliquam
        voluptatibus dignissimos, nulla consequuntur maiores dolorum optio
        quibusdam itaque commodi dolores inventore. Ab recusandae minima fugit,
        esse beatae aliquam ea excepturi. Harum error asperiores necessitatibus.
        Iure dolorum nulla soluta iusto ea fugiat recusandae quam distinctio
        omnis pariatur, voluptatem, molestiae officiis modi, eum eveniet minus
        dolores? Voluptates officiis consequuntur sint iure ratione? Sapiente,
        quisquam eos quas voluptate dicta, unde quasi doloremque culpa rerum
        ipsa placeat dolores quibusdam quis quidem deserunt sit libero adipisci
        aliquam quia accusamus et perferendis corrupti quod? Eos, illo. Impedit
        hic velit labore possimus ipsam optio aliquam voluptatem provident quo
        reprehenderit officia fuga laudantium, voluptate perferendis
        accusantium, praesentium recusandae consequatur necessitatibus
        perspiciatis alias minima dicta doloribus. Perspiciatis, itaque
        deleniti! Commodi laudantium dolorem accusantium eaque, reiciendis eius,
        enim vel quisquam sit voluptatum sapiente! Inventore quae perferendis,
        enim ab totam est consequuntur? Voluptatum doloribus incidunt nostrum
        temporibus adipisci officia, eum natus! Amet nesciunt rem nam dolor
        voluptas aperiam asperiores facere reiciendis corporis iure sapiente,
        numquam est officiis delectus aliquid non quia ut iste tenetur. Odio
        laborum ullam rerum eaque, fuga id. Cumque eaque distinctio aperiam,
        laboriosam ipsam rerum tenetur sed dolore, eveniet in eos ullam, maiores
        impedit cupiditate tempora. Vel provident deleniti explicabo eveniet
        pariatur perferendis unde neque quidem sunt aspernatur. Assumenda
        inventore repellendus quaerat labore perferendis sed soluta ipsum ipsam
        temporibus nam doloribus, accusamus delectus itaque consequatur ex
        repudiandae perspiciatis animi porro sunt ducimus nisi. Eius unde
        repellendus sequi laboriosam? Necessitatibus saepe cupiditate mollitia
        voluptates ex, enim dolore quae? Harum dignissimos ab quo nam dolores,
        vero numquam sapiente, quia, voluptatem nemo modi labore! At odio
        consequatur incidunt eaque suscipit nostrum. Sed ipsum totam qui ipsa
        veritatis reprehenderit itaque hic? Culpa officia tenetur, unde labore
        odit, ipsa distinctio assumenda inventore corrupti, hic perferendis
        eaque provident similique quasi et ipsum aliquam officiis? Ab,
        dignissimos explicabo laboriosam quo numquam inventore! Dolore ducimus
        modi totam, architecto voluptatum libero nobis possimus dicta officiis
        enim dolores deleniti obcaecati quisquam id, suscipit veniam odit esse
        facere iste. Ab veniam sunt officiis rerum? Ipsam mollitia aliquam,
        libero ducimus assumenda modi alias facere dignissimos, veniam odio
        nisi, saepe dicta suscipit repellendus reprehenderit. Quis sit
        exercitationem vero velit, consectetur soluta. Sit laudantium quisquam
        illo sapiente eos! Pariatur corporis, voluptatibus veniam fugit laborum
        eos. Perspiciatis qui voluptates harum neque quibusdam, omnis fugit
        dolores ut? Laudantium hic eligendi quibusdam nostrum quasi doloribus.
        Neque inventore esse magnam consequuntur, quam dolore, sint molestias
        voluptates modi asperiores voluptatum quasi culpa aperiam sit reiciendis
        expedita sed, maiores hic accusamus veritatis minus ut ipsam quae eaque.
        Nostrum. Dicta velit dolor quam exercitationem perferendis, voluptates
        beatae deserunt iure. Deserunt, quibusdam in pariatur eaque voluptates
        cupiditate suscipit nulla modi recusandae? Dicta atque in commodi
        eligendi ex quam voluptas aperiam! Quas aperiam nobis, assumenda magnam
        cupiditate blanditiis iusto labore vel reprehenderit ab dignissimos esse
        eum, excepturi numquam minima at minus officia molestiae, totam facere?
        Quisquam, deleniti. Aperiam tempore repellendus maxime. Nihil accusamus
        saepe sit in, soluta repellendus quia odio eveniet natus exercitationem
        laudantium, maiores libero repellat debitis. Blanditiis, sequi
        aspernatur necessitatibus vel sed distinctio numquam at alias. Vero,
        earum excepturi? Reprehenderit asperiores omnis, iure perferendis
        provident, qui modi id quasi a esse facilis voluptatibus nemo sed
        consectetur, non maxime! Ex magnam exercitationem praesentium dolores
        eveniet vitae fugit quod reiciendis perspiciatis. Earum cupiditate sed
        sit enim iste rem dolore in quas consequatur debitis eum unde voluptates
        est neque, incidunt nulla fugiat! Nemo, ea optio non maiores voluptatum
        neque officiis repudiandae adipisci? Qui error inventore sint! Omnis
        sequi dolorum libero ex delectus explicabo, fugit iusto porro accusamus
        illo repellendus esse fugiat in veritatis hic? Explicabo, blanditiis
        exercitationem in recusandae deleniti itaque velit! Quis molestias
        necessitatibus tempore commodi repellendus cumque ipsum est eius,
        praesentium recusandae, ad odit totam et pariatur quae ut incidunt
        sapiente odio omnis! Maiores delectus inventore, deleniti mollitia
        dignissimos magnam? Necessitatibus culpa nulla atque quaerat fuga ex?
        Sed ipsam exercitationem sit perferendis alias illo beatae blanditiis
        amet totam voluptates consequuntur nulla velit voluptatibus, quisquam
        at? Quibusdam nulla enim ducimus natus. Delectus voluptatem nemo
        quibusdam, nostrum modi quasi voluptas iure vel suscipit recusandae
        provident dolore architecto molestias? Aliquam laudantium illum totam?
        Aut rerum consequatur possimus nemo est iure neque voluptates
        aspernatur. Illum a dicta dolor quos, rerum illo minima excepturi, eum
        tempore, minus consectetur nihil numquam architecto delectus. Sunt
        aliquam similique aliquid quidem? Ducimus nihil perferendis facere
        commodi alias, aut odit? Animi, dolores consequatur. Porro numquam error
        nesciunt nemo esse illo vel voluptatem blanditiis accusamus aperiam quam
        dignissimos distinctio hic repellat, iusto, necessitatibus consequuntur
        laborum nisi sunt, fugiat fuga dolore! Assumenda! Fugit, explicabo, id
        nostrum nulla modi, tenetur suscipit dolorum odit atque obcaecati
        officiis quas? Harum aut, perferendis rem saepe enim illo doloribus nisi
        maxime quae recusandae, suscipit nihil obcaecati aliquid! Dolorem vero
        quibusdam necessitatibus ipsa quae, sint beatae adipisci odit modi
        laborum incidunt quod obcaecati laboriosam esse deserunt et perferendis
        vitae commodi! Labore ratione veniam impedit aut illum dolores
        asperiores. Veniam inventore laborum voluptatum sed quia ipsam, quidem
        earum ratione reiciendis velit optio laboriosam rem officia vero quo
        perferendis excepturi voluptate, totam accusantium sunt. Consequuntur,
        magni eos. Tenetur, molestiae laboriosam. Nobis dolor, repellendus
        laborum eos adipisci, error consequatur expedita laboriosam quaerat,
        enim ullam facilis nulla! Optio laudantium ratione, sunt debitis qui,
        aperiam voluptate fuga, quisquam suscipit labore rerum sit aliquam!
        Reiciendis alias laboriosam iusto excepturi corrupti. Ipsam explicabo,
        deleniti, soluta velit repellendus non doloremque debitis dolorum aut,
        tempora ipsum. Earum fuga, odit dolor fugiat cum doloribus omnis
        cupiditate illum quis! Ullam nobis debitis consequuntur totam similique,
        iusto quasi amet? Sequi sunt, tempora qui quidem praesentium molestias
        nam sit ad quae minus aspernatur aliquid rerum debitis omnis explicabo?
        Modi, molestiae cum. Nulla exercitationem laborum recusandae veritatis,
        vel vitae impedit, fugit praesentium repudiandae eum eius, beatae et
        corporis suscipit! Culpa doloremque, voluptate asperiores labore rerum
        alias? Doloremque, aliquid. Esse doloremque magni illum. Nesciunt
        ratione beatae doloribus atque quidem quia assumenda nemo, quis
        voluptatem repellat, iure minus quos corrupti commodi impedit delectus
        deleniti quam distinctio, ea enim qui esse? Accusamus nulla fugiat
        alias. Atque deserunt nobis, dolorem ad id veritatis optio placeat,
        nihil ducimus sunt perspiciatis distinctio quaerat adipisci
        reprehenderit assumenda! Aut dolor maiores ducimus voluptate ad deserunt
        fugiat, inventore qui est ea! Deserunt, et quas! Reiciendis fugit
        obcaecati repellendus nemo itaque, esse culpa sit quibusdam ducimus?
        Consequatur eum et labore! Maiores quisquam at tempore, error temporibus
        harum quas praesentium cumque rerum commodi? Voluptatibus aspernatur
        adipisci odio minima quae? Beatae temporibus, voluptate repellendus,
        tempore nesciunt doloribus maxime iusto obcaecati nobis earum ea sed
        provident maiores impedit asperiores? Tenetur sunt nobis officia ducimus
        vitae? Excepturi, nobis nemo! Ratione nulla, facilis ipsa officiis
        dolore molestias magnam, natus minima ad eius temporibus enim itaque
        nemo rerum consectetur porro atque numquam, explicabo perspiciatis
        doloremque commodi amet? Possimus. Aperiam impedit odit iste ex esse ut
        cupiditate qui ducimus error accusamus necessitatibus, sit voluptate
        explicabo eaque, unde laudantium? Quia quae facere cumque maxime nostrum
        sapiente iusto consequatur! Molestiae, nisi? Cumque ducimus sequi
        aliquam aut impedit alias suscipit excepturi voluptatibus nemo nulla
        dicta, error dolor quae, tenetur nobis illo commodi corrupti nesciunt
        eius non. Facere libero assumenda eligendi similique iusto. Est illum
        similique beatae corrupti. Possimus suscipit vel quasi et error eius sed
        provident a quam! Maiores error porro, tempora eum ad, quisquam
        accusamus id atque placeat dolores quo quia. Laboriosam aliquam harum
        optio eaque, impedit nobis corrupti? Asperiores maxime illum magni
        fugiat aspernatur praesentium ad repellendus blanditiis architecto!
        Harum tempore nostrum necessitatibus asperiores nemo eos minima
        temporibus odio laboriosam. Quo tempore illo, quasi, ea hic quae
        laudantium quod impedit suscipit, quidem totam eos aliquam consectetur
        eligendi expedita corporis sed harum quos voluptatibus provident
        recusandae? Ex perferendis repellendus debitis qui! Molestiae
        voluptatem, ea inventore, sed impedit, magnam a quae cupiditate ad at
        dolor nulla dicta eius rem ab! Repellendus neque qui soluta sed
        similique impedit deleniti, consectetur iste quaerat quis. Dignissimos
        corporis impedit distinctio, voluptate id dolorum unde expedita corrupti
        recusandae velit nisi laborum atque quod asperiores nemo sint quos? Vero
        alias eveniet doloremque pariatur quibusdam eligendi exercitationem hic?
        Dolore. Nulla rem officiis eum laborum expedita fuga possimus vel libero
        nesciunt ratione quam est ea, magnam alias laudantium obcaecati sit iste
        eveniet commodi quasi ipsa quibusdam fugit. Reiciendis, voluptatum
        tempora. Vel dolores sint minima quia praesentium. Facilis architecto
        fugiat tempore aliquam sunt magnam, veniam exercitationem error ad
        maiores provident cumque ipsum vel eveniet optio repudiandae similique
        doloribus expedita, praesentium dolores? Similique minus nostrum
        tenetur! Est ratione quam et odit tempora molestias illo deserunt, nam
        vel. Voluptate numquam libero nobis tenetur officia nihil nemo
        repudiandae ad possimus praesentium quo, excepturi quia! Voluptas rerum,
        minus distinctio itaque deleniti ea ratione explicabo sint laborum
        cupiditate laudantium provident tempore consequatur atque officia iste
        ut, sequi, amet praesentium nihil unde tempora ex obcaecati? A, fugit.
        Veniam numquam, officia est animi dolorum quam consectetur aliquam
        cupiditate fugit. Sunt totam dolores velit! Cum sapiente dolor,
        consequatur sunt architecto iste iure! Hic similique est a harum
        reiciendis ipsa. Accusantium aut rem eos aspernatur qui deserunt
        necessitatibus incidunt suscipit harum eveniet, delectus explicabo omnis
        laboriosam impedit amet molestiae quod dolorem earum at sint fugit!
        Ducimus neque consequatur porro nesciunt! Magni pariatur ab modi!
        Corporis omnis distinctio sint officiis asperiores doloribus, nihil nemo
        explicabo, obcaecati ex soluta ipsum adipisci quasi repellat aliquid cum
        molestiae sapiente aspernatur, modi esse? Laboriosam, beatae! Alias
        possimus fugit a aliquid, obcaecati molestias quis aut reprehenderit
        sequi labore perferendis numquam eius veritatis quos minima culpa illo
        itaque blanditiis illum voluptatem eum, quasi, sapiente rerum! Dolorum,
        aliquam! Facilis quaerat rem labore consequatur ab minima nisi. Id earum
        iure maiores unde porro illo aut obcaecati, quo tenetur odio quibusdam
        illum maxime error perspiciatis dolorum laborum possimus. Ex, nam. Iste,
        maxime. Consequatur ducimus amet dolores reiciendis quos facere laborum.
        Rerum, laborum? Laudantium pariatur, laboriosam, error quod, assumenda
        temporibus repudiandae cupiditate veniam totam recusandae consequuntur
        natus. Doloribus libero debitis velit. Voluptatibus, repellat! Culpa rem
        unde pariatur modi mollitia, ducimus alias cupiditate consequuntur
        obcaecati saepe delectus, quas vero accusantium voluptatibus beatae
        similique dolor quibusdam qui. Vitae, illo. Provident atque
        reprehenderit id. Distinctio laborum tenetur, alias animi explicabo vero
        reprehenderit ipsam, numquam unde provident perspiciatis, voluptatibus
        debitis eum? Sunt voluptatem, animi assumenda repudiandae iure
        aspernatur ea iusto cum, libero culpa ab quaerat! Sed aut consequatur
        similique perspiciatis. Qui, consequuntur autem, rem quos quaerat
        nesciunt quae corrupti voluptatem, officia voluptatibus omnis vitae
        voluptate fuga eaque! Voluptate repellendus mollitia odio nisi harum
        iusto impedit. Quibusdam quas suscipit voluptatibus illum, adipisci
        quisquam id quaerat veniam numquam, aperiam fugit rem necessitatibus nam
        unde aspernatur quod! Reiciendis delectus possimus omnis velit, deleniti
        quis? Repudiandae voluptatibus molestias culpa! Officiis accusantium
        officia enim iusto voluptate minima assumenda, consectetur ea aspernatur
        repellendus nemo error odit sapiente iure, quisquam facilis blanditiis
        ullam numquam! Veritatis, eum molestias unde nam sint recusandae ea.
        Excepturi repudiandae, beatae enim culpa eaque aspernatur ullam earum
        asperiores quisquam iure est voluptatem non error quaerat, assumenda
        placeat voluptatibus, unde ea cum quam dignissimos. Neque eius
        repellendus corporis cupiditate. Nulla quia exercitationem commodi,
        suscipit mollitia consequuntur magnam minus totam earum doloribus quam,
        saepe deleniti esse dolores corrupti porro. Reprehenderit nobis alias
        voluptates deserunt blanditiis laudantium aut, ea optio nesciunt. Natus,
        accusamus est modi consequuntur voluptas vitae architecto assumenda fuga
        dolorem harum atque dolor nisi aliquid corrupti pariatur optio
        repellendus. Maxime sed omnis sint dolorem asperiores iste nostrum, est
        dolores. Unde vero, reprehenderit, eum sunt est placeat alias sit
        veritatis et adipisci laboriosam quos consectetur aperiam nostrum quasi
        ad eius delectus excepturi nesciunt officia sapiente quo dignissimos.
        Vitae, doloribus quas. Nihil nisi nostrum quasi temporibus accusamus
        similique aspernatur velit tenetur ab laboriosam. Mollitia veritatis
        fuga nostrum, esse consequuntur minus numquam enim doloremque, quibusdam
        eligendi modi et tempora, harum quia error. Rerum, vitae aut debitis
        aperiam deleniti quod quos perferendis necessitatibus, non repellendus
        nam atque nihil blanditiis facilis? Voluptas asperiores fuga ullam saepe
        corporis dolorum ipsam nesciunt possimus minus, dolor culpa! Ex enim quo
        esse possimus nulla molestiae ducimus amet labore a veritatis facere
        praesentium, rerum reprehenderit quibusdam ad nisi numquam
        necessitatibus, voluptas accusantium eveniet, dolores beatae
        exercitationem recusandae adipisci! Aperiam. Quisquam error debitis sint
        at commodi exercitationem aspernatur, est, deserunt non sapiente dolor
        magnam, quaerat omnis consequatur quia. Odio molestiae eaque blanditiis
        cupiditate est quam, veritatis eius esse hic officiis. Fugit, mollitia
        cupiditate vitae quos officia quae culpa numquam laudantium aspernatur
        exercitationem enim pariatur suscipit asperiores earum ipsum minima
        dicta odio a eligendi rerum consectetur incidunt? Inventore cupiditate
        velit blanditiis? Eligendi tempora inventore reiciendis odit rerum
        molestiae doloremque amet nesciunt animi ratione eum, iusto consequatur
        aliquid minima iure hic deleniti expedita, blanditiis excepturi nisi!
        Explicabo dolorem nostrum accusantium quia voluptatum! Aliquid saepe ea
        labore perferendis, esse sequi natus praesentium exercitationem sed
        expedita illum libero, suscipit blanditiis optio iure. Ut, explicabo
        incidunt obcaecati nostrum cupiditate omnis doloremque sit consequatur
        illo quas. Excepturi a nesciunt minima iure nostrum perferendis soluta
        voluptate distinctio recusandae incidunt quisquam, voluptatum rerum
        voluptatem mollitia cumque reprehenderit autem architecto quam.
        Dignissimos aspernatur ipsum quo illo delectus laudantium illum.
        Obcaecati excepturi impedit id sint molestias fugiat atque eveniet vero
        aliquam quidem ipsa quisquam nam ipsam necessitatibus, voluptas
        doloribus doloremque optio quos repellat neque non recusandae magnam ab!
        Consequuntur, recusandae? Porro aspernatur ratione beatae odio maiores
        veritatis sapiente nam tenetur quis. Est repudiandae quisquam labore rem
        corrupti iste architecto, sequi magni, aperiam nulla quasi consectetur
        totam natus cupiditate. Nesciunt, sequi.
      </AppText>
      {/* Add more content to test scrolling */}
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
