#
# Theme-Constants
#
# More information about Constants:
# http://wiki.typo3.org/TypoScript_Constants
#
themes {
	bootstrapTheme = {$themes.resourcesPublicPath}Contrib/Bootstrap/css/bootstrap.min.css

    configuration {
        # cat=theme; type=string; label= Name of the site
        siteName = Bootstrap Theme
        # cat=theme; type=options[development,production]; label= Production or development mode
        themeMode = development
        colors {
            # cat=siteColors; type=color; label= Link color
            link      = #FF8700
            # cat=siteColors; type=color; label= Primary color
            primary   = #FF8700
            # cat=siteColors; type=color; label= Secondary color
            secondary = #EFEFEF
        }
        meta {
            defaults {
                # cat=metaDefaults; type=string; label= Default abstract
                abstract = TYPO3 Bootstrap Theme
                # cat=metaDefaults; type=string; label= Default keywords
                keywords = TYPO3, Theme, Bootstrap
                # cat=metaDefaults; type=string; label= Default description
                description = TYPO3 Bootstrap Theme
                # cat=metaDefaults; type=string; label= Default author
                author = TYPO3 Themes-Team
                # cat=metaDefaults; type=string; label= Default author email
                authorEmail = team@typo3-themes.org
            }
            # cat=meta; type=string; label= Copyright
            copyright = TYPO3 Themes-Team - www.typo3-themes.org
            # cat=meta; type=string; label= Robots (for example: noindex,nofollow)
            robots = noindex,nofollow
            # cat=meta; type=string; label= Revisit after (for example: 7 days)
            revisitAfter = 7 days
            # cat=meta; type=string; label= Application name
            applicationName = Bootstrap-Theme
        }
    }
    # Page-IDs of DataStorages
    #container {
    #    frontendUser =
    #    news =
    #    address =
    #    newsletter =
    #}
}