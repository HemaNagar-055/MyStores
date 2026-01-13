// Components
import { login } from '@/routes';
import { email } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, Mail } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Forgot password"
            description="Enter your email to receive a password reset link"
        >
            <Head title="Forgot password" />

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="flex flex-col gap-6">
                <div className="card bg-base-100 w-full shadow-2xl">
                    <div className="card-body">
                        <Form {...email.form()}>
                            {({ processing, errors }) => (
                                <>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email address</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                autoComplete="off"
                                                autoFocus
                                                className="pl-9 input input-bordered w-full"
                                                placeholder="email@example.com"
                                            />
                                        </div>

                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="my-6 flex items-center justify-start">
                                        <Button
                                            className="w-full btn btn-primary"
                                            disabled={processing}
                                            data-test="email-password-reset-link-button"
                                        >
                                            {processing && (
                                                <LoaderCircle className="h-4 w-4 animate-spin" />
                                            )}
                                            Email password reset link
                                        </Button>
                                    </div>
                                </>
                            )}
                        </Form>

                        <div className="space-x-1 text-center text-sm text-muted-foreground">
                            <span>Or, return to</span>
                            <TextLink href={login()}>log in</TextLink>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
