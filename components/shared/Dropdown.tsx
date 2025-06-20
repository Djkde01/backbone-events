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
import { useState } from "react"
import { Input } from "../ui/input"
import { DialogClose } from "@radix-ui/react-dialog"
import { Button } from "../ui/button"

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
    const [categories, setCategories] = useState<ICategory[]>([
    ])

    const [newCategory, setNewCategory] = useState<string>("")

    const handleAddCategory = () => {
        console.log("Añadir categoría:", newCategory)
    }
    return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
            <SelectTrigger className="select-field">
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
                    <DialogTrigger className="w-full flex hover:bg-primary-50">Añadir categoría</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Nueva Categoría</DialogTitle>
                            <DialogDescription>
                                <Input type="text" placeholder="Nombre de la categoría" className="input-field mt-3" onChange={(e) => setNewCategory(e.target.value)} />
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                            <Button type="submit" onClick={handleAddCategory}>Añadir</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </SelectContent>
        </Select>
    )
}

export default Dropdown