import React from 'react'
import { Dropdown, Menu , Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://img.pixers.pics/pho_wat(s3:700/FO/15/29/70/78/700_FO15297078_6eafedb6937f4e6d94b0e27856b0887b.jpg,612,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,392,650,jpg)/duvar-resimleri-gri-kurt.jpg.jpg"/>
        <Dropdown pointing="top left" text="Nil">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
