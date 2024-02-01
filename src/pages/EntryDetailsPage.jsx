import { BiArrowBack } from "react-icons/bi";
import { Button } from "../components/common/Button";
import { Actions, EntryBody, EntryContainer, EntryHeader, EntryInfo, HeaderActions } from "../styled/pages/entryDetailsPage";
import { EditEntryModal, ConfirmModal } from "../components/modals";
import { useModal } from '../hooks';

export const EntryDetailsPage = () => {

    const editModal = useModal();
    const confirmModal = useModal();

  return (
    <>
    <EditEntryModal isOpen={editModal.isOpen} closeModal={editModal.closeModal}/>
    <ConfirmModal isOpen={confirmModal.isOpen} closeModal={confirmModal.closeModal}/>
    <EntryContainer>
        <HeaderActions>
            <Actions>
                <Button label='Back' icon={<BiArrowBack/>}/>
            </Actions>
            <Actions>
                <Button label='Edit' onClick={editModal.openModal}/>
                <Button label='Delete' variant='outlined' onClick={confirmModal.openModal}/>
            </Actions>
        </HeaderActions>

        <EntryHeader>
            <EntryInfo>
                <p className="entry-author">Austin Powers</p>
                <span className="entry-separator">|</span>
                <span className="entry-publication-date">2024-01-20</span>
            </EntryInfo>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis.</h2>
        </EntryHeader>

        <EntryBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque vero provident atque ipsam dolores iure eaque id ipsa voluptates saepe nulla modi aspernatur ratione corrupti odit esse, ipsum a quis enim ea fugit! Ullam aliquam quis nisi unde voluptates id error! Nisi ullam dicta libero? Sequi inventore tempora dicta minus voluptates. Numquam nulla voluptate quam id et corrupti! Corrupti at labore natus necessitatibus nesciunt veniam itaque, accusamus quod ipsum inventore? Quas velit numquam asperiores assumenda nemo soluta rerum dicta fuga quam maiores? Dignissimos at fuga tempora, repellat alias cumque atque corporis quo nam enim nulla obcaecati saepe totam unde. Qui, sint eius! Nam libero aliquid accusantium rerum labore deserunt aut itaque consequuntur, provident quidem est facilis doloremque ipsam ad mollitia dolorum praesentium soluta reiciendis. Suscipit dolore atque animi? Quos quo esse temporibus odit, corporis odio a nihil error corrupti quasi doloremque sapiente dolore fugit voluptates praesentium dolorem alias et? Delectus maxime quia ducimus, accusamus dolorum molestiae dolorem laborum eius fugit. Vel fuga recusandae eveniet autem odio dolores laborum, repudiandae sunt, optio ratione qui illum facere neque labore nobis commodi ducimus distinctio, repellendus expedita? Fugit illum veritatis ex! Quos, optio iusto neque debitis officiis reprehenderit, quia similique dolores ut maiores deserunt deleniti. Rem asperiores aliquid amet tenetur corrupti perspiciatis minima maxime. Similique, magni! Facere omnis quod, quaerat soluta rem dolores possimus molestiae voluptatum sint corrupti, quos optio explicabo, dignissimos autem aliquam. Sequi, exercitationem cum commodi laboriosam, eveniet aspernatur quas vitae omnis quia quaerat hic assumenda nihil beatae eos reiciendis necessitatibus! Unde explicabo placeat dolore voluptatibus! Velit dolorum illum rem. Pariatur fuga obcaecati doloribus mollitia ipsam possimus ut ratione illum aliquid molestias ipsum veniam quidem blanditiis consequuntur, odit quia non, quos praesentium numquam itaque laudantium. Minus necessitatibus laudantium quod repellat perspiciatis at veniam ipsa temporibus nam autem natus voluptatum sequi nemo quos ut, numquam illo quisquam veritatis adipisci dolorem! Quisquam quas dignissimos corrupti cumque repellat facere hic quis quia, animi cupiditate nobis, asperiores expedita, a iure. Veniam fugiat illo dolor? Minus incidunt doloribus fugit. Cumque, deserunt! Velit explicabo quis repellendus voluptatum similique, voluptates culpa, fuga nesciunt earum alias dolorem a ab necessitatibus ipsa minus magni quidem temporibus atque praesentium reiciendis modi debitis, consequatur vel. Neque quos omnis laboriosam minima laudantium, odit, obcaecati eius molestias maiores repellendus autem non ex quasi? Facere, quisquam perspiciatis? Et provident omnis at voluptas veniam repudiandae maxime labore ratione modi placeat aliquid necessitatibus in debitis quasi deserunt hic repellat quis aspernatur non quisquam beatae, reiciendis quae? Consectetur, modi qui, iusto et veritatis quam incidunt rerum nam numquam recusandae sed deleniti nemo, maxime magni esse reprehenderit placeat perferendis ea optio quisquam. Optio recusandae at enim veritatis quas libero neque ipsam natus saepe, placeat non provident incidunt corrupti velit doloremque. Quos voluptate fugit, dolorum quae eveniet dolores accusamus, cum id molestiae earum dicta atque dolore impedit, repudiandae ea. Quaerat laborum maxime modi illo inventore facere tenetur, dolor deleniti iure perspiciatis, consequuntur ut id. Voluptate et sit quam rerum aut, tempore labore sint repellendus earum esse velit obcaecati minus consequatur provident molestiae sequi quae. Iusto inventore omnis suscipit perferendis maxime perspiciatis vero odit! Iste illum laudantium magnam ullam vitae doloribus consequuntur nam maiores debitis, aspernatur corporis quam, nulla alias amet aut eaque adipisci dolores atque ipsa animi placeat ut porro voluptas natus! Quidem neque repudiandae nulla quis accusantium labore magni a architecto, veniam mollitia vitae, reprehenderit dignissimos amet itaque voluptates dolorum sunt quaerat repellat ipsum, iste adipisci. Repudiandae, vero eos doloribus exercitationem ipsam sint, at suscipit et in excepturi soluta inventore aut tempore placeat aspernatur velit eligendi qui optio culpa officiis architecto error veniam. Soluta, nobis itaque labore harum commodi sequi ipsum in alias assumenda maxime facere excepturi saepe voluptatum! Iure odio tenetur veniam perferendis! Veritatis ex fuga non voluptatem commodi velit incidunt, odio assumenda magni aperiam dolores impedit est rerum placeat laboriosam tenetur exercitationem iusto quisquam deleniti beatae corrupti autem odit laborum qui. Voluptatum repellat, nesciunt assumenda consectetur dolorum eveniet eaque rem ea blanditiis, facilis suscipit laboriosam velit voluptates. Nemo aperiam doloribus numquam amet quisquam tempore totam quaerat cumque ipsum iusto voluptates delectus rem deleniti soluta pariatur, repudiandae officia quae eveniet voluptatem modi commodi obcaecati accusamus. Quae iure, quod sunt, porro, sequi similique distinctio enim placeat reprehenderit provident ipsa. Expedita accusamus soluta cum iusto id doloremque ex quae, natus porro quas voluptates veritatis facilis molestias pariatur incidunt sunt, ipsam atque. Temporibus recusandae consequuntur eveniet libero earum. Nemo delectus recusandae illo consequatur quas in, amet dolor aliquam dolore quia ullam incidunt distinctio dolores unde labore dolorum, eligendi dicta facere quos porro. Facilis quos quia natus, sed, beatae magnam aperiam molestiae autem sapiente quod consectetur, fuga cupiditate. Voluptatem itaque accusantium repellat dolores totam ut nulla, soluta libero voluptatum deleniti et quas tempora rem nesciunt vero vitae odit est distinctio id maiores sapiente accusamus sequi sunt. Ipsam repudiandae minus delectus voluptatibus ratione placeat incidunt non possimus, quibusdam aliquam. Laborum adipisci cumque officia commodi dolores aperiam repudiandae animi temporibus et sequi? Facilis omnis ipsum provident, repellat adipisci nulla. Distinctio repellat impedit autem saepe atque rem doloribus, dolore natus ipsam, eius magni quam doloremque nemo ut, voluptas beatae. Ea eligendi laborum ducimus a et illo placeat, vero voluptatem quis dolorem inventore esse id nobis optio! Corrupti laudantium exercitationem inventore et illum, officia officiis optio? Repudiandae fugiat dignissimos aut autem ex. Distinctio dignissimos repellat quod praesentium, soluta nemo voluptate itaque alias laborum possimus asperiores modi tenetur inventore ex mollitia at aperiam repudiandae corrupti natus eum enim. Ea, quaerat esse! Error nobis expedita, beatae cupiditate consectetur, eos ipsa dolorem voluptatem tenetur autem iusto recusandae sit reprehenderit. Perspiciatis repellat, delectus ab veritatis deleniti consequuntur culpa optio harum voluptate, neque, obcaecati voluptas dolorem facere. Odit, doloribus. Maiores et reiciendis assumenda molestiae nam repudiandae commodi eaque laborum, error animi totam asperiores possimus. Voluptas modi cumque tenetur ea error, facere ex quisquam cum fugiat aut laudantium id, explicabo labore adipisci dolor? Beatae, sint enim? Iure earum tenetur iusto ea doloribus blanditiis molestiae, perferendis ratione expedita, unde repudiandae in quibusdam nam tempora quasi ex laborum odit quo dicta! Exercitationem, nostrum unde?
        </EntryBody>
    </EntryContainer>
    </>
  );
};