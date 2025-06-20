import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { DropdownProps, ICategory } from "@/types"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { DialogClose } from "@radix-ui/react-dialog"
import { Button } from "../ui/button"
import { createCategory, getAllCategories } from "@/lib/actions/caregory.actions"

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
    const [categories, setCategories] = useState<ICategory[]>([
    ])

    const [newCategory, setNewCategory] = useState<string>("")

    const handleAddCategory = () => {
        createCategory({ categoryName: newCategory.trim() }).then((category) => {
            setCategories((prev) => [...prev, category])
        })
    }

    useEffect(() => {
        const getCategories = async () => {
            const categoryList = await getAllCategories()
            if (categoryList.length === 0) return
            setCategories(categoryList as ICategory[])
        }


        getCategories()
    }, [])
    return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
            <SelectTrigger className="select-field h-[54px]">
                <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
                {
                    categories.length > 0 && categories.map((category) => (
                        <SelectItem
                            key={category._id as string}
                            value={category._id as string}
                        >
                            {category.name}
                        </SelectItem>
                    ))
                }
                <Dialog>
                    <DialogTrigger className="w-full flex hover:bg-primary-50 m-2 cursor-pointer">Añadir categoría</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Nueva Categoría</DialogTitle>
                            <DialogDescription>
                                <Input type="text" placeholder="Nombre de la categoría" className="input-field mt-3" onChange={(e) => setNewCategory(e.target.value)} />
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button className="cursor-pointer" variant="outline">Cancelar</Button>
                            </DialogClose>
                            <Button className="cursor-pointer" type="submit" onClick={handleAddCategory}>Añadir</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </SelectContent>
        </Select>
    )
}

export default Dropdown