"use client";

import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";

import { EventFormData, eventFormSchema } from "@/lib/validator";
import { eventDefaultValues } from "@/constants";
import { EventFormProps } from "@/types";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import Dropdown from "./Dropdown";
import { Textarea } from "../ui/textarea";
import FileUploader from "./FileUploader";
import { Checkbox } from "../ui/checkbox";

const EventForm = ({ userId, type }: EventFormProps) => {

    const initialValues = eventDefaultValues
    const form = useForm<EventFormData>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: initialValues,
    })

    function onSubmit(values: EventFormData) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values, userId, type)
    }

    const [files, setFiles] = useState<File[]>([]);
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex md:flex-row flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Título del evento" {...field} className="input-field" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="categoryId"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Dropdown onChangeHandler={field.onChange} value={field.value} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex md:flex-row flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Textarea placeholder="Descripción del evento" {...field} className="textarea rounded-2xl h-72" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <FileUploader onFieldChange={field.onChange} imageUrl={field.value} setFiles={setFiles} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex md:flex-row flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex items-center justify-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2 shadow-xs">
                                        <Image
                                            src="/assets/icons/location.svg"
                                            width={20}
                                            height={20}
                                            alt="location icon"
                                            className="filter-gray" />
                                        <Input placeholder="Lugar" {...field} className="input-field shadow-none" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex md:flex-row flex-col gap-4">

                    <FormField
                        control={form.control}
                        name="startDateTime"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex items-center justify-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2 shadow-xs">
                                        <Image
                                            src="/assets/icons/calendar.svg"
                                            width={20}
                                            height={20}
                                            alt="start date icon"
                                            className="filter-gray" />
                                        <p className="ml-3 whitespace-nowrap text-gray-600">Inicio: </p>
                                        <DatePicker
                                            selected={field.value}
                                            onChange={(date: Date | null) => field.onChange(date)}
                                            showTimeSelect
                                            timeInputLabel="Time:"
                                            dateFormat="MM/dd/yyyy h:mm aa"
                                            wrapperClassName="datePicker"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="endDateTime"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex items-center justify-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2 shadow-xs">
                                        <Image
                                            src="/assets/icons/calendar.svg"
                                            width={20}
                                            height={20}
                                            alt="end date icon"
                                            className="filter-gray" />
                                        <p className="ml-3 whitespace-nowrap text-gray-600">Final: </p>
                                        <DatePicker
                                            selected={field.value}
                                            onChange={(date: Date | null) => field.onChange(date)}
                                            showTimeSelect
                                            timeInputLabel="Time:"
                                            dateFormat="MM/dd/yyyy h:mm aa"
                                            wrapperClassName="datePicker"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex md:flex-row flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex items-center justify-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2 shadow-xs">
                                        <Image
                                            src="/assets/icons/price.svg"
                                            width={20}
                                            height={20}
                                            alt="end date icon"
                                            className="filter-gray" />
                                        <Input
                                            type="number"
                                            min={0}
                                            placeholder="Precio del evento"
                                            {...field}
                                            className="input-field shadow-none"
                                        />
                                        <FormField
                                            control={form.control}
                                            name="isFree"

                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <div className="flex items-center">
                                                            <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Gratis</label>
                                                            <Checkbox
                                                                id="isFree"
                                                                className="mr-2"
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className="capitalize" type="submit" size="lg" disabled={!form.formState.isValid || form.formState.isSubmitting}>{form.formState.isSubmitting ? "Creando..." : `${type} Evento`}</Button>
            </form>
        </Form>
    )
}

export default EventForm