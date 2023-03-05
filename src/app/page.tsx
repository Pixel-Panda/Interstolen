import Photos from '@/components/Home/Photos'
import Home from '@components/Home'
import styles from '@css/common.module.css'
import { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Home />
        <Photos />
      </div>
    </div>
  )
}

export default Page
