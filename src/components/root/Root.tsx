import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

const RootContainer: React.FC = () => {
    return (
        <>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
            >
                <Outlet />
            </motion.main>
        </>
    )
}

export default RootContainer
