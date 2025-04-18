<script setup lang="ts">
    import Button from '@/components/ui/button/Button.vue';
    import { RouterLink, RouterView } from 'vue-router'
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
    import { Icon } from '@iconify/vue'
    import { useColorMode } from '@vueuse/core'
    import {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
      navigationMenuTriggerStyle,
    } from '@/components/ui/navigation-menu'

    const mode = useColorMode()

    const components: { title: string, href: string, description: string }[] = [
      {
        title: 'Material para clases',
        href: '/teacher/materials',
        description:
          'Materiales puestos a la dispocisión pública del docente para su uso gratuito.',
      },
      {
        title: 'Cursos gratuitos',
        href: '/teacher/courses',
        description:
          'Cursos gratuitos para el docente, con validez oficial.',
      }
    ]
</script>
<template>
    <div class="flex justify-between items-center py-2 px-2 border-b-2 border">
        <div class="flex gap-2 items-center">
          <div>
            <RouterLink to="/" class="flex items-center">
              <Button variant="ghost" class="text-xl font-bold select-auto">EDV</Button>
            </RouterLink>
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>SEP</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
                      <li class="row-span-3">
                        <NavigationMenuLink as-child>
                            <Button class="hidden" disabled></Button>
                            <img src="../assets/images/SEP_logo.png" class="w-full">
                            <div class="mb-2 mt-4 text-lg font-medium">
                              Secretaria de Educación Pública
                            </div>
                            <p class="text-sm leading-tight text-muted-foreground">
                              Sección dedicada a la publicación digerida de la información publicada por la SEP
                            </p>
                        </NavigationMenuLink>
                      </li>

                      <li>
                        <NavigationMenuLink as-child>
                          <RouterLink to="/sep/usicamm" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div class="text-sm font-medium leading-none">USICAMM</div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Información oficial del USICAMM.
                            </p>
                          </RouterLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink as-child>
                          <RouterLink
                            to="/sep/SepNews"
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div class="text-sm font-medium leading-none">Noticias</div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Declaraciones publicas y oficiales de la SEP.
                            </p>
                          </RouterLink>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Docentes</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      <li v-for="component in components" :key="component.title">
                        <NavigationMenuLink as-child>
                          <RouterLink
                            :to="component.href"
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {{ component.description }}
                            </p>
                          </RouterLink>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <RouterLink to="/about">
                    <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                      Acerca de mi
                    </NavigationMenuLink>
                  </RouterLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div>
          <DropdownMenu>
              <DropdownMenuTrigger as-child>
              <Button variant="ghost">
                  <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span class="sr-only">Toggle theme</span>
              </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
              <DropdownMenuItem @click="mode = 'light'">
                  Light
              </DropdownMenuItem>
              <DropdownMenuItem @click="mode = 'dark'">
                  Dark
              </DropdownMenuItem>
              <DropdownMenuItem @click="mode = 'auto'">
                  System
              </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </div>
    <div>
        <RouterView />
    </div>
    <div>
        Footer
    </div>
</template>
